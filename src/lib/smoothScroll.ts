export function smoothScroll(
  targetSelector: string,
): void {
  const target = document.querySelector<HTMLElement>(targetSelector);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;

  const duration = 1500;
  const startTime = performance.now();

  const ease = (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ease(progress);
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) requestAnimationFrame(animateScroll);
  }

  requestAnimationFrame(animateScroll);
}
