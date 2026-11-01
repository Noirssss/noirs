const moviePaging={page:1,size:50,key:'',generation:0,items:[]};
const decodedMoviePosters=new Map();
function moviePosterChoices(item){const options=item.seasons?[item.poster,...(item.posterCandidates||[])]:[item.poster,...posterCandidatesForRecord(item)];return rankPosterUrls(options.map(safePoster).filter(Boolean));}
function decodeMoviePoster(url){
 if(decodedMoviePosters.has(url))return decodedMoviePosters.get(url);
 const promise=new Promise((resolve,reject)=>{
  const img=new Image(),timer=setTimeout(()=>{img.onload=img.onerror=null;reject(Error('Poster timeout'));},6000);
  img.onload=()=>{clearTimeout(timer);if(img.decode)img.decode().catch(()=>{}).then(resolve);else resolve();};
  img.onerror=()=>{clearTimeout(timer);reject(Error('Poster unavailable'));};img.decoding='async';img.src=url;
 });
 decodedMoviePosters.set(url,promise);
 promise.catch(()=>{if(decodedMoviePosters.get(url)===promise)decodedMoviePosters.delete(url);});
 while(decodedMoviePosters.size>150)decodedMoviePosters.delete(decodedMoviePosters.keys().next().value);
 return promise;
}
async function warmMoviePoster(item){for(const path of moviePosterChoices(item).slice(0,3)){try{const url=path.startsWith('/assets/')?await getLifePosterURL(path.slice(1)):path;await decodeMoviePoster(url);return;}catch{}}}
async function warmMovieRecords(items,concurrency=4,generation=null){let next=0;await Promise.all(Array.from({length:concurrency},async()=>{while(next<items.length&&(generation===null||generation===moviePaging.generation)){
 if(generation!==null&&(activeLifePosters||pendingLifePosters.size)){await new Promise(resolve=>setTimeout(resolve,100));continue;}
 await warmMoviePoster(items[next++]);
}}));}
function turnMoviePage(target){
 target=Math.max(1,Math.min(target,Math.ceil(moviePaging.items.length/moviePaging.size)||1));
 if(target===moviePaging.page)return;
 document.dispatchEvent(new Event('life-library-update'));
 moviePaging.page=target;render();
 document.querySelector('#movie-paging-top').scrollIntoView({block:'start',behavior:'instant'});
}
function ensureMoviePaging(){const list=document.querySelector('#movie-list');if(!list||document.querySelector('#movie-paging-top'))return;for(const position of ['top','bottom']){const nav=document.createElement('nav');nav.id='movie-paging-'+position;nav.className='movie-pagination';nav.setAttribute('aria-label',position==='top'?'影视列表顶部分页':'影视列表底部分页');nav.addEventListener('click',event=>{const button=event.target.closest('button[data-page]');if(button)void turnMoviePage(Number(button.dataset.page),button);});list[position==='top'?'before':'after'](nav);}}
function paginateMovieRecords(items){ensureMoviePaging();moviePaging.items=items;const key=document.querySelector('#movie-search').value+'|'+document.querySelector('#movie-sort').value+'|'+items.map(item=>item.id).join(',');if(key!==moviePaging.key){moviePaging.page=1;moviePaging.key=key;}const pages=Math.max(1,Math.ceil(items.length/moviePaging.size));moviePaging.page=Math.max(1,Math.min(pages,moviePaging.page));const page=moviePaging.page,start=(page-1)*moviePaging.size,end=Math.min(start+moviePaging.size,items.length);const controls=`<span class="movie-page-range">${items.length?start+1:0}–${end} / ${items.length} 部</span><div><button type="button" data-page="${page-1}" ${page===1?'disabled':''}>上一页</button><span aria-live="polite">${page} / ${pages}</span><button type="button" data-page="${page+1}" ${page===pages?'disabled':''}>下一页</button></div>`;for(const nav of document.querySelectorAll('.movie-pagination')){nav.innerHTML=controls;nav.hidden=items.length===0;}const generation=++moviePaging.generation;setTimeout(()=>preloadFollowingMoviePages(items.slice(end,end+moviePaging.size*2),generation),0);return items.slice(start,end);}
async function preloadFollowingMoviePages(items,generation){await warmMovieRecords(items,2,generation);}
