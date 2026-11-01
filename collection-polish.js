(() => {
  const sizes = new ResizeObserver(entries => {
    for (const entry of entries) {
      sizeCard(entry.target);
      const img = entry.target.querySelector('img.real-poster');
      if (img?.naturalWidth) fitPoster(img, entry.contentRect.width / entry.contentRect.height);
    }
  });
  function sizeCard(poster) {
    const card=poster.closest('.movie-entry');
    if(!card||!poster.clientHeight)return;
    card.style.setProperty('--movie-poster-height',poster.clientHeight+'px');
    card.style.setProperty('--movie-card-height',Math.round(Math.max(poster.clientHeight*1.5,poster.clientHeight+190))+'px');
  }
  function fitPoster(img, boxRatio) {
    if (!boxRatio || !img.naturalHeight) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    img.style.width = Math.min(100, ratio / boxRatio * 100) + '%';
    img.style.height = Math.min(100, boxRatio / ratio * 100) + '%';
    img.classList.toggle('poster-feathered', Math.abs(ratio / boxRatio - 1) > .012);
  }
  function fillPoster(img) {
    const poster = img.closest('.poster');
    if (!poster || !img.naturalWidth || img.hidden) return;
    let backdrop = poster.querySelector('.poster-ambience');
    if (!backdrop) {
      backdrop = document.createElement('span');
      backdrop.className = 'poster-ambience';
      backdrop.setAttribute('aria-hidden', 'true');
      poster.prepend(backdrop);
    }
    backdrop.style.backgroundImage = `url(${JSON.stringify(img.currentSrc || img.src)})`;
    img.closest('.movie-entry')?.style.setProperty('--poster-glass-image', backdrop.style.backgroundImage);
    fitPoster(img, poster.clientWidth / poster.clientHeight);
    sizeCard(poster);
    sizes.observe(poster);
  }
  document.addEventListener('load', event => {
    if (event.target.matches?.('img.real-poster')) fillPoster(event.target);
    if (event.target.matches?.('img')) {
      const card = event.target.closest('.travel-country-card');
      if (card) card.style.setProperty('--poster-glass-image', `url(${JSON.stringify(event.target.currentSrc || event.target.src)})`);
    }
  }, true);
  document.querySelectorAll('.poster img.real-poster').forEach(fillPoster);
  document.querySelectorAll('#movie-list .poster').forEach(poster=>{sizeCard(poster);sizes.observe(poster);});
  for (const list of document.querySelectorAll('#movie-list, #series-seasons')) new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) if(node.nodeType===1)node.querySelectorAll('.poster').forEach(poster=>{sizeCard(poster);sizes.observe(poster);});
    for (const record of records) for (const node of record.removedNodes) if (node.nodeType === 1) {
      if (node.matches('.poster')) sizes.unobserve(node);
      node.querySelectorAll('.poster').forEach(poster => sizes.unobserve(poster));
    }
  }).observe(list, {childList: true});
  const tabs = document.querySelector('.segments[aria-label="影视分类"]');
  if (!tabs) return;
  tabs.querySelector('[data-media="unknown"]')?.remove();
  const buttons = [...tabs.querySelectorAll('[data-media]')];
  const indicator = document.createElement('span');
  indicator.className = 'media-tab-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  tabs.prepend(indicator);
  const move = (index, animate = true) => {
    indicator.style.transition = animate ? '' : 'none';
    indicator.style.transform = `translateX(${index * 100}%)`;
  };
  move(Math.max(0, buttons.findIndex(button => button.classList.contains('selected'))), false);
  tabs.addEventListener('click', event => {
    const index = buttons.indexOf(event.target.closest('[data-media]'));
    if (index >= 0) move(index, event.detail !== 0);
  });
})();
