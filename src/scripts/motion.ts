import { gsap } from 'gsap';
export function initMotion(): void {
  const hero = document.querySelector<HTMLElement>('.hero');
  const lines = gsap.utils.toArray<HTMLElement>('[data-hero-line]');
  if (!hero || !lines.length) return;
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    let timeline: gsap.core.Timeline;
    const createTimeline = () => {
      timeline?.kill();
      gsap.set(lines, { '--selection': '0%', '--caret': 0 });
      timeline = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
      lines.forEach((line, index) => {
        const words = Math.max(1, line.textContent?.trim().split(/\s+/).length ?? 1);
        timeline.set(line, { '--caret': 1 }, index ? '+=0.65' : '+=0.8');
        timeline.to(line, { '--selection': '100%', duration: words * .6, ease: `steps(${words})` });
        timeline.set(line, { '--caret': 0 }, '+=0.35');
      });
      timeline.to(lines, { '--selection': '0%', duration: .9 }, '+=2.5');
    };
    createTimeline();
    const observer = new IntersectionObserver(([entry]) => timeline.paused(!entry?.isIntersecting));
    observer.observe(hero);
    const onVisibility = () => { if (document.hidden) timeline.pause(); else if (hero.getBoundingClientRect().bottom > 0) timeline.resume(); };
    document.addEventListener('visibilitychange', onVisibility);
    document.addEventListener('portfolio:language-change', createTimeline);
    return () => {
      observer.disconnect(); timeline.kill();
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('portfolio:language-change', createTimeline);
    };
  });
  document.addEventListener('astro:before-swap', () => media.revert(), { once: true });
}
