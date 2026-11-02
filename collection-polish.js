(() => {
  const composites = new WeakMap();
  const sizes = new ResizeObserver(entries => {
    for (const entry of entries) {
      sizeCard(entry.target);
      const img = entry.target.querySelector('img.real-poster');
      if (img?.naturalWidth) fillPoster(img);
    }
  });
  function sizeCard(poster) {
    const card=poster.closest('.movie-entry');
    if(!card||!poster.clientHeight)return;
    card.style.setProperty('--movie-poster-height',poster.clientHeight+'px');
    card.style.setProperty('--movie-card-height',Math.round(Math.max(poster.clientHeight*1.5,poster.clientHeight+190))+'px');
  }
  function fillPoster(img) {
    const poster = img.closest('.poster');
    if (!poster || !img.naturalWidth || img.hidden) return;
    sizeCard(poster);
    sizes.observe(poster);
    if (!poster.clientWidth || !poster.clientHeight) return;
    const width=Math.min(480,Math.round(poster.clientWidth*Math.min(devicePixelRatio||1,1.5)));
    const height=Math.round(width*poster.clientHeight/poster.clientWidth);
    const key=[img.currentSrc||img.src,width,height].join('|');
    if(composites.get(poster)?.key===key)return;
    // One bitmap owns both the sharp artwork and its feathered surround.
    // No independent CSS filter/backdrop layer is animated on mobile Safari.
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
    canvas.className='poster-composite';canvas.setAttribute('role','img');canvas.setAttribute('aria-label',img.alt);
    const context=canvas.getContext('2d');
    const blur=document.createElement('canvas');blur.width=10;blur.height=15;
    blur.getContext('2d').drawImage(img,0,0,10,15);
    context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';
    context.filter='blur('+Math.round(width*.055)+'px)';
    context.drawImage(blur,-width*.08,-height*.08,width*1.16,height*1.16);context.filter='none';
    const foreground=document.createElement('canvas');foreground.width=width;foreground.height=height;
    const front=foreground.getContext('2d'),scale=Math.min(width/img.naturalWidth,height/img.naturalHeight);
    const w=img.naturalWidth*scale,h=img.naturalHeight*scale,x=(width-w)/2,y=(height-h)/2;
    front.drawImage(img,x,y,w,h);
    if(Math.abs(w/width-h/height)>.012){
      front.globalCompositeOperation='destination-in';
      const horizontal=front.createLinearGradient(x,0,x+w,0);
      for(const [at,alpha] of [[0,0],[.06,.12],[.16,.55],[.28,1],[.72,1],[.84,.55],[.94,.12],[1,0]])horizontal.addColorStop(at,'rgba(0,0,0,'+alpha+')');
      front.fillStyle=horizontal;front.fillRect(0,0,width,height);
      const vertical=front.createLinearGradient(0,y,0,y+h);
      for(const [at,alpha] of [[0,0],[.05,.25],[.12,.8],[.20,1],[.8,1],[.88,.8],[.95,.25],[1,0]])vertical.addColorStop(at,'rgba(0,0,0,'+alpha+')');
      front.fillStyle=vertical;front.fillRect(0,0,width,height);
    }
    context.drawImage(foreground,0,0);foreground.width=foreground.height=1;
    const old=composites.get(poster)?.canvas;
    if(old)old.replaceWith(canvas);else poster.prepend(canvas);
    composites.set(poster,{key,canvas});poster.classList.add('poster-composed');
    poster.querySelector('.poster-ambience')?.remove();
    // A tiny preblurred bitmap also tints the card body, avoiding a live blur filter.
    const card=poster.closest('.movie-entry');
    if(card){try{card.style.setProperty('--poster-glass-image',`url(${JSON.stringify(blur.toDataURL())})`);card.classList.add('card-tint-baked');}catch{card.style.removeProperty('--poster-glass-image');}}
    blur.width=blur.height=1;
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
