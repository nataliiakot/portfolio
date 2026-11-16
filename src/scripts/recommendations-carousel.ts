export function initRecommendationsCarousel(): void {
  const viewport = document.querySelector<HTMLElement>('.recommendation-carousel');
  const track = viewport?.querySelector<HTMLElement>('.recommendation-track');
  if (!viewport || !track || track.children.length < 2) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const controller = new AbortController();
  const options = { signal: controller.signal };
  let frame = 0;
  let lastTime = 0;
  let offset = viewport.scrollLeft;
  let step = 0;
  let visible = false;
  let hovered = false;
  let keyboardFocus = false;
  let touching = false;
  let dialogOpen = false;
  let touchTimer = 0;

  function canRun() {
    return visible && !document.hidden && !reducedMotion.matches && !hovered && !keyboardFocus && !touching && !dialogOpen;
  }
  function tick(time: number) {
    frame = 0;
    if (!viewport || !track || !canRun()) return;
    if (lastTime && step > 0) {
      offset += Math.min(time - lastTime, 64) * .032;
      // Reuse the same five cards: no duplicate quotes or hidden links.
      while (offset >= step && track.firstElementChild) {
        track.append(track.firstElementChild);
        offset -= step;
      }
      viewport.scrollLeft = offset;
    }
    lastTime = time;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (!canRun()) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    } else if (!frame) {
      offset = viewport!.scrollLeft;
      frame = requestAnimationFrame(tick);
    }
  }
  function measure() {
    step = (track!.firstElementChild?.getBoundingClientRect().width ?? 0) + parseFloat(getComputedStyle(track!).columnGap);
    offset = viewport!.scrollLeft;
    const heights = [...track!.querySelectorAll<HTMLElement>('.recommendation-quote')].map(quote => {
      const first = quote.firstElementChild?.getBoundingClientRect();
      const last = quote.lastElementChild?.getBoundingClientRect();
      return first && last ? last.bottom - first.top : 0;
    }).filter(height => height > 0);
    if (heights.length) {
      const previewHeight = Math.ceil(Math.min(...heights));
      viewport!.style.setProperty('--recommendation-preview-height', `${previewHeight}px`);
      track!.querySelectorAll<HTMLElement>('.recommendation-quote').forEach(quote => {
        quote.classList.toggle('is-truncated', quote.scrollHeight > previewHeight + 1);
      });
    }
  }
  const dialog = document.querySelector<HTMLDialogElement>('#recommendation-dialog');
  const fullQuote = dialog?.querySelector<HTMLElement>('.recommendation-full-quote');
  let trigger: HTMLButtonElement | null = null;
  track.addEventListener('click', event => {
    const card = event.target instanceof Element ? event.target.closest<HTMLButtonElement>('.recommendation-card') : null;
    if (!card || !dialog || !fullQuote) return;
    trigger = card;
    fullQuote.replaceChildren(...[...card.querySelectorAll('.recommendation-paragraph')].map(source => {
      const paragraph = document.createElement('p');
      paragraph.textContent = source.textContent;
      return paragraph;
    }));
    dialogOpen = true;
    sync();
    dialog.showModal();
  }, options);
  dialog?.querySelector('.recommendation-close')?.addEventListener('click', () => dialog.close(), options);
  let backdropPress = false;
  dialog?.addEventListener('pointerdown', event => { backdropPress = event.target === dialog; }, options);
  dialog?.addEventListener('click', event => {
    if (event.target === dialog && backdropPress) dialog.close();
    backdropPress = false;
  }, options);
  dialog?.addEventListener('close', () => {
    dialogOpen = false;
    trigger?.focus({ preventScroll: true });
    sync();
  }, options);
  void document.fonts.ready.then(() => { if (!controller.signal.aborted) measure(); });
  const resize = new ResizeObserver(measure);
  resize.observe(viewport);
  const intersection = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; sync(); });
  intersection.observe(viewport);

  viewport.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = true; sync(); } }, options);
  viewport.addEventListener('pointerleave', () => { hovered = false; sync(); }, options);
  viewport.addEventListener('focusin', event => { keyboardFocus = event.target instanceof Element && event.target.matches(':focus-visible'); sync(); }, options);
  viewport.addEventListener('focusout', event => { if (!(event.relatedTarget instanceof Node) || !viewport.contains(event.relatedTarget)) { keyboardFocus = false; sync(); } }, options);
  viewport.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') { clearTimeout(touchTimer); touching = true; sync(); }
  }, options);
  const releaseTouch = () => {
    clearTimeout(touchTimer);
    touchTimer = window.setTimeout(() => { touching = false; sync(); }, 2000);
  };
  viewport.addEventListener('pointerup', releaseTouch, options);
  viewport.addEventListener('pointercancel', releaseTouch, options);
  reducedMotion.addEventListener('change', sync, options);
  document.addEventListener('visibilitychange', sync, options);
  document.addEventListener('portfolio:language-change', measure, options);
  sync();
  measure();
  document.addEventListener('astro:before-swap', () => {
    controller.abort(); cancelAnimationFrame(frame); clearTimeout(touchTimer); resize.disconnect(); intersection.disconnect();
  }, { once: true });
}
