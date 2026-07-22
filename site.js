// Hanyu Liu — shared site behavior (no framework, no tracker)
// Compact sticky bar fades in once the big wordmark scrolls out of view.
document.addEventListener('DOMContentLoaded', () => {
  const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 72);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
