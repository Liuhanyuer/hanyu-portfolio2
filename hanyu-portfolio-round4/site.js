// Hanyu Liu — shared site behavior (no framework, no tracker)

document.addEventListener('DOMContentLoaded', () => {
  // Compact sticky bar fades in once the big wordmark scrolls out of view.
  const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 72);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Gentle scroll-reveal for case-study prose — headings, paragraphs,
  // pull-quotes, code blocks and stat tiles fade/slide in as they enter view.
  // Safety net: content must never depend on this to become readable —
  // a hard timeout force-reveals everything even if the observer never
  // fires (headless screenshotters, reduced-motion, odd viewports, etc).
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll(
    '.pdtext-col h2, .pdtext-col p, .pdtext-col pre, .pdtext-col .pull, .pdtext-col .grid2'
  );
  if (targets.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
    targets.forEach(el => el.classList.add('reveal'));
    const revealAll = () => targets.forEach(el => el.classList.add('in'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(el => io.observe(el));
    setTimeout(revealAll, 2500); // fallback: never leave real content invisible
  }
});
