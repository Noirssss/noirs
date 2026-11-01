// One observer per collection; images and network requests never gate visibility.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new Set(), active = new Map();
  let keyboard = false, lastScroll = null, suppressUntil = 0;
  function contentChanged() {
    suppressUntil = performance.now() + 500;
    for (const animation of active.values()) animation.cancel();
    document.querySelectorAll('.card-reveal-pending').forEach(card => card.classList.remove('card-reveal-pending'));
  }
  document.addEventListener('life-library-update',contentChanged);
  document.addEventListener('click', event => {
    if (event.target.closest?.('.movie-pagination button,[data-media],.project-nav a')) contentChanged();
  }, true);
  for (const name of ['input','change']) document.addEventListener(name, event => {
    if (event.target.closest?.('.library-toolbar,#advanced-filters,.genre-chip-list,.controls')) contentChanged();
  }, true);
  document.addEventListener('scroll', () => { lastScroll = performance.now(); }, { passive: true, capture: true });
  document.addEventListener('keydown', () => { keyboard = true;contentChanged(); }, { passive: true });
  document.addEventListener('pointerdown', () => { keyboard = false; }, { passive: true });
  document.addEventListener('wheel', () => { keyboard = false; }, { passive: true });
  document.addEventListener('touchstart', () => { keyboard = false; }, { passive: true });
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    let stagger = 0, rowTop = null;
    const ordered = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top-b.boundingClientRect.top || a.boundingClientRect.left-b.boundingClientRect.left);
    for (const entry of ordered) {
      if (!entry.isIntersecting) continue;
      const card = entry.target;
      observer.unobserve(card);
      const trigger = card.querySelector('[data-id], [data-series], [data-travel-country]');
      const key = trigger && card.parentElement.id + ':' + (trigger.dataset.id || trigger.dataset.series || trigger.dataset.travelCountry);
      if (!key || seen.has(key)) { card.classList.remove('card-reveal-pending');continue; }
      seen.add(key);
      const now = performance.now();
      if (reduce.matches || keyboard || lastScroll === null || now-lastScroll > 350 || now < suppressUntil || entry.boundingClientRect.top < 0 || !card.animate || !card.classList.contains('card-reveal-pending')) {card.classList.remove('card-reveal-pending');continue;}
      if (rowTop === null || Math.abs(entry.boundingClientRect.top-rowTop) > 24) { rowTop = entry.boundingClientRect.top; stagger = 0; }
      const animation = card.animate([
        { opacity: 0, transform: 'translateY(36px) scale(.985)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
      ], { duration: 520, delay: Math.min(stagger++ * 70, 280), easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'both' });
      active.set(card, animation);
      animation.finished.catch(() => {}).finally(() => {
        if (active.get(card) === animation) active.delete(card);
        card.classList.remove('card-reveal-pending');animation.cancel();
      });
    }
  }, { threshold: .02, rootMargin: '0px 0px -12px 0px' }) : null;
  function watch(list) {
    if (!list || !observer) return;
    function refresh() {
      for (const [card, animation] of active) if (!card.isConnected) { animation.cancel(); active.delete(card); }
      for (const card of list.querySelectorAll(':scope > .movie-entry, :scope > .travel-country-card')) {
        const trigger=card.querySelector('[data-id], [data-series], [data-travel-country]');
        const key=trigger&&card.parentElement.id+':'+(trigger.dataset.id||trigger.dataset.series||trigger.dataset.travelCountry);
        if(key&&!seen.has(key)&&!reduce.matches&&!keyboard&&card.getBoundingClientRect().top>=window.innerHeight)card.classList.add('card-reveal-pending');
        observer.observe(card);
      }
    }
    new MutationObserver(records => {
      for (const record of records) for (const node of record.removedNodes) if (node.nodeType === 1) observer.unobserve(node);
      refresh();
    }).observe(list, { childList: true });
    refresh();
  }
  reduce.addEventListener('change', () => { if (reduce.matches) contentChanged(); });
  watch(document.querySelector('#movie-list'));
  watch(document.querySelector('#travel-list'));
})();
