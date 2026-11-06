import { translations } from '../content/translations';
const cursor = document.querySelector<HTMLElement>('.context-cursor');
const label = cursor?.querySelector('span');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let frame = 0;
let x = 0;
let y = 0;
let pointerPresent = false;
let activeCard: HTMLElement | null = null;
function resetCard() {
  activeCard?.style.removeProperty('--tilt-x');
  activeCard?.style.removeProperty('--tilt-y');
  activeCard = null;
}
function hideCursor() {
  if (cursor) cursor.hidden = true;
  document.documentElement.classList.remove('custom-cursor');
  resetCard();
}
function updateCursor() {
  frame = 0;
  if (!cursor || !label || !pointerPresent || !finePointer.matches || document.documentElement.classList.contains('image-lightbox-open')) { hideCursor(); return; }
  // Scrolling changes the element under a stationary pointer.
  const target = document.elementFromPoint(x, y);
  const card = target?.closest<HTMLElement>('.skill-card') ?? null;
  if (activeCard !== card) resetCard();
  activeCard = card;
  if (card && !reducedMotion.matches) {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--tilt-x', `${(0.5 - (y - bounds.top) / bounds.height) * 9}deg`);
    card.style.setProperty('--tilt-y', `${((x - bounds.left) / bounds.width - 0.5) * 9}deg`);
  }
  const custom = target?.closest<HTMLElement>('[data-cursor]');
  const link = target?.closest<HTMLAnchorElement>('a[href]');
  const interactive = target?.closest<HTMLElement>('a[href], button, summary, input:not([type="hidden"]), select, textarea, label[for], [role="button"], [role="link"]');
  const actionable = Boolean(interactive && !interactive.matches(':disabled, [aria-disabled="true"]') && !interactive.closest('[inert]'));
  const uk = document.documentElement.lang === 'uk';
  let text = 'Nataliia';
  let color = '#9feaff';
  if (custom) { text = custom.dataset.cursor ?? text; color = custom.dataset.cursorColor ?? color; text = uk ? translations[text] ?? text : text; }
  else if (target?.closest('[data-language]')) { text = uk ? 'Мова' : 'Language'; color = '#e4d5ff'; }
  else if (target?.closest('summary')) { text = uk ? 'Детальніше' : 'Discover'; color = '#ffe3a3'; }
  else if (link) {
    if (link.hasAttribute('data-case-image')) { text = uk ? 'Збільшити' : 'Zoom'; }
    else if (link.href.startsWith('mailto:')) { text = uk ? 'Написати' : 'Say hello'; color = '#ffd4e0'; }
    else if (link.href.includes('linkedin.com')) { text = 'LinkedIn'; color = '#bde8ff'; }
    else if (link.pathname === '/cv/' || link.href.includes('drive.google.com/file/')) { text = 'CV'; color = '#e4d5ff'; }
    else { text = uk ? 'Переглянути' : 'Explore'; color = '#c7e7fb'; }
  } else if (actionable) { text = uk ? 'Натиснути' : 'Click'; }
  label.textContent = text;
  cursor.dataset.interactive = String(actionable);
  cursor.style.setProperty('--cursor-color', color);
  cursor.hidden = false;
  document.documentElement.classList.add('custom-cursor');
  const left = x + cursor.offsetWidth > innerWidth - 8 ? x - cursor.offsetWidth : x;
  const top = y + cursor.offsetHeight > innerHeight - 8 ? y - cursor.offsetHeight : y;
  cursor.style.transform = `translate(${Math.max(0, Math.round(left))}px, ${Math.max(0, Math.round(top))}px)`;
}
function scheduleUpdate() { if (!frame) frame = requestAnimationFrame(updateCursor); }
function leavePointer() { pointerPresent = false; hideCursor(); }
document.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch') { leavePointer(); return; }
  pointerPresent = true;
  x = event.clientX;
  y = event.clientY;
  scheduleUpdate();
});
document.documentElement.addEventListener('pointerleave', leavePointer);
window.addEventListener('blur', leavePointer);
document.addEventListener('keydown', event => { if (event.key === 'Tab') leavePointer(); });
finePointer.addEventListener('change', leavePointer);
// Capture also covers scrollable tables and other nested containers.
document.addEventListener('scroll', scheduleUpdate, { passive: true, capture: true });
window.addEventListener('resize', scheduleUpdate, { passive: true });
document.addEventListener('portfolio:language-change', scheduleUpdate);
