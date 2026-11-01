// All writes use the signed-in user's existing Storage RLS; guests remain read-only.
const canEditMovies=()=>!lifeAuth.guest&&lifeAuth.member?.active===true&&lifeAuth.member?.role==='admin';
const movieWriteState={busy:false,original:null};
const previousRecordEditor=openEditor;
openEditor=(kind,id)=>kind==='movies'&&canEditMovies()?openOnlineMovieEditor(id):previousRecordEditor(kind,id);
const previousRecordImdbId=recordImdbId;
recordImdbId=record=>{
 const values=[record.ratingImdbId,previousRecordImdbId(record),record.poster,record.seriesPoster,record.posterSourceUrl,record.sourceUrl];
 return values.map(value=>String(value||'').match(/(?:^|\/)(tt\d{5,12})(?=$|[/.?])/i)?.[1]?.toLowerCase()).find(Boolean)||'';
};
const previousImdbRating=actualImdbRating;
actualImdbRating=record=>{const value=imdbRatingCatalog[recordImdbId(record)]?.rating;return !record.seasons&&typeof value==='number'&&value>0&&value<=10?value:previousImdbRating(record);};
async function readMovieFile(name){const {data:blob,error}=await lifeClient.storage.from(LIFE_AUTH_CONFIG.bucket).download(name);if(error)throw Error('云端资料读取失败，请稍后重试');return JSON.parse(await blob.text());}
async function writeMovieFile(name,body){
 if(!canEditMovies())throw Error('需要管理员权限');
 const blob=new Blob([JSON.stringify(body)],{type:'application/json'});
 const {error}=await lifeClient.storage.from(LIFE_AUTH_CONFIG.bucket).upload(name,blob,{upsert:true,contentType:'application/json',cacheControl:'0'});
 if(error)throw Error('云端保存失败，请检查登录状态后重试');privateFileCache.set(name,Promise.resolve(blob));
}
function mergeMovieChange(latest,original,replacement){
 const index=latest.movies.findIndex(row=>row.id===(original?.id||replacement.id));
 if(original&&(!latest.movies[index]||JSON.stringify(latest.movies[index])!==JSON.stringify(original)))throw Error('此记录已在其他页面修改，请关闭后刷新再编辑');
 if(!original&&index>=0)throw Error('记录编号冲突，请重新打开编辑');
 const next={...latest,movies:latest.movies.slice()};
 if(replacement){if(index<0)next.movies.push(replacement);else next.movies[index]=replacement;}else next.movies.splice(index,1);
 return next;
}
async function commitMovieChange(original,replacement){
 if(!canEditMovies()||movieWriteState.busy)throw Error('请等待当前保存完成');
 movieWriteState.busy=true;
 try{const latest=await readMovieFile('public-collection.json'),next=mergeMovieChange(latest,original,replacement);if(!valid({...next,travel:data.travel}))throw Error('记录格式无效');await writeMovieFile('public-collection.json',next);data.movies=next.movies;document.dispatchEvent(new Event('life-library-update'));render();}
 finally{movieWriteState.busy=false;}
}
function openOnlineMovieEditor(id){
 if(!canEditMovies())return;
 const original=id?data.movies.find(row=>row.id===id):null;if(id&&!original)return;
 $('#series-dialog')?.close();movieWriteState.original=original?structuredClone(original):null;
 editing={kind:'movies',id};const r=original||{title:'',englishTitle:'',date:'',rating:0,note:'',mediaType:'movie'};
 $('#editor').dataset.editorKind='movies';$('#editor-title').textContent=original?'编辑影视':'记录影视';
 const covers=r.mediaType==='series'?seasonCoverCandidates(r):posterCandidatesForRecord(r);
 $('#fields').innerHTML=`<label>类型<select name="mediaType"><option value="movie" ${r.mediaType==='movie'?'selected':''}>电影</option><option value="series" ${r.mediaType==='series'?'selected':''}>电视剧</option><option value="unknown" ${r.mediaType==='unknown'?'selected':''}>待分类</option></select></label>${field('中文片名','title',r.title)}<label>英文片名<input name="englishTitle" maxlength="200" value="${escape(r.englishTitle||'')}"></label><label>观看日期<input name="date" type="date" value="${escape(r.date||'')}"></label><label>我的评分<select name="rating">${[0,1,2,3,4,5].map(value=>`<option value="${value}" ${r.rating===value?'selected':''}>${value?'★'.repeat(value):'未评分'}</option>`).join('')}</select></label><label>观后感<textarea name="note" maxlength="2000">${escape(r.note||'')}</textarea></label><div class="movie-lookup online-movie-preview">${covers.length?posterImage(covers[0],r.title,covers):''}${recordSourceLinks(r)}<small>封面及关联资料保留不变</small></div>`;
 $('#form-error').textContent='';$('#delete-record').hidden=!original;$('#delete-record').textContent='删除记录';$('#editor').showModal();
}
const oldMovieSubmit=$('#record-form').onsubmit,oldMovieDelete=$('#delete-record').onclick;
$('#record-form').onsubmit=async event=>{
 if(!canEditMovies()||editing?.kind!=='movies')return oldMovieSubmit(event);event.preventDefault();
 const values=Object.fromEntries(new FormData(event.target)),original=movieWriteState.original;
 const record={...(original||{}),id:original?.id||crypto.randomUUID(),title:values.title.trim(),englishTitle:values.englishTitle.trim(),date:values.date,mediaType:values.mediaType,mediaTypeSource:'manual',rating:Number(values.rating),note:values.note.trim()};
 if(!valid({...data,movies:[record]})){$('#form-error').textContent='请检查片名、观看日期与评分';return;}
 const button=event.target.querySelector('[type="submit"]');button.disabled=true;$('#form-error').textContent='正在保存';
 try{await commitMovieChange(original,record);$('#editor').close();notify('影视记录已保存');}catch(error){$('#form-error').textContent=error.message;}finally{button.disabled=false;}
};
$('#delete-record').onclick=async()=>{
 if(!canEditMovies()||editing?.kind!=='movies')return oldMovieDelete();
 if($('#delete-record').textContent!=='确认删除？'){$('#delete-record').textContent='确认删除？';return;}
 $('#delete-record').disabled=true;try{await commitMovieChange(movieWriteState.original,null);$('#editor').close();notify('影视记录已删除');}catch(error){$('#form-error').textContent=error.message;}finally{$('#delete-record').disabled=false;}
};
$('#editor').addEventListener('cancel',event=>{if(movieWriteState.busy)event.preventDefault();});
$('#close-editor').addEventListener('click',event=>{if(movieWriteState.busy){event.stopImmediatePropagation();event.preventDefault();}},true);

const ratingsPanel=document.createElement('section');ratingsPanel.className='life-rating-tools';ratingsPanel.hidden=true;
ratingsPanel.innerHTML=`<h3>IMDb 评分管理</h3><p>按 tt 编号匹配官方评分 不更换海报 不修改个人评分</p><label>选择影视<select id="rating-record"></select></label><label>IMDb 编号<input id="rating-code" placeholder="tt0075314 或 IMDb 链接" maxlength="180"></label><div class="rating-admin-actions"><button type="button" id="rating-query" class="primary">查询并保存评分</button><button type="button" id="rating-missing">补齐缺失评分</button><button type="button" id="rating-refresh">刷新全部评分</button></div><p id="rating-admin-status" role="status"></p><details><summary>网络受限时导入官方文件</summary><p><a href="https://datasets.imdbws.com/title.ratings.tsv.gz" target="_blank" rel="noopener">下载 IMDb 官方评分文件 ↗</a></p><label>选择评分文件<input id="rating-admin-file" type="file" accept=".gz,.tsv"></label></details>`;
$('#life-admin-panel').append(ratingsPanel);
function refreshRatingChoices(){
 const select=$('#rating-record'),chosen=select.value;select.replaceChildren();
 for(const record of data.movies){const option=document.createElement('option');option.value=record.id;option.textContent=record.title+(actualImdbRating(record)===null?' · 缺评分':'');select.append(option);}
 if(data.movies.some(row=>row.id===chosen))select.value=chosen;select.dispatchEvent(new Event('change'));
}
$('#rating-record').onchange=()=>{$('#rating-code').value=recordImdbId(data.movies.find(row=>row.id===$('#rating-record').value)||{});};
let ratingAdminBusy=false;
async function saveRatingEntries(entries){
 if(!canEditMovies())throw Error('需要管理员权限');
 if(!Object.keys(entries).length)return;
 const latest=await readMovieFile('imdb-ratings.json');latest.entries={...latest.entries,...entries};latest.updatedAt=new Date().toISOString();
 await writeMovieFile('imdb-ratings.json',latest);imdbRatingCatalog=latest.entries;render();
}
async function runRatingAdmin(mode,file){
 if(!canEditMovies()||ratingAdminBusy)return;
 const selected=data.movies.find(row=>row.id===$('#rating-record').value),code=parseImdbCode($('#rating-code').value);
 const records=mode==='single'?[selected]:data.movies.filter(row=>mode!=='missing'||actualImdbRating(row)===null);
 const ids=[...new Set((mode==='single'?[code]:records.map(recordImdbId)).filter(Boolean))],status=$('#rating-admin-status');
 if(!ids.length){status.textContent=mode==='single'?'请输入有效的 IMDb tt 编号':'暂无可查询的编号 缺少编号的影视请单独选择并填写';return;}
 ratingAdminBusy=true;ratingsPanel.querySelectorAll('button,input,select').forEach(el=>el.disabled=true);status.textContent='正在匹配官方评分';
 try{
  let result;
  if(file)result=await new Promise((resolve,reject)=>{const worker=new Worker('./rating-worker.js');worker.onmessage=({data})=>{worker.terminate();data.error?reject(Error(data.error)):resolve(data);};worker.onerror=()=>{worker.terminate();reject(Error('评分文件无法读取'));};worker.postMessage({file,ids});});
  else{if(!['127.0.0.1','localhost'].includes(location.hostname))throw Error('请展开下方选项 下载并导入官方评分文件');const response=await nativeLifeFetch('./api/rating-search',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ids})});if(!response.ok)throw Error('评分服务暂时无法连接 请使用下方官方文件导入');result=await response.json();if(result.error)throw Error(result.error);}
  // A score is only stored under an exact IMDb ID; unresolved items keep their prior values.
  if(mode==='single'&&selected&&result.entries[code]&&recordImdbId(selected)!==code)await commitMovieChange(selected,{...selected,ratingImdbId:code});
  await saveRatingEntries(result.entries);
  const matched=Object.keys(result.entries).length,missingId=records.filter(row=>!recordImdbId(row)).length;
  status.textContent=(mode==='single'&&result.entries[code]?`IMDb ${result.entries[code].rating.toFixed(1)} 已保存 `:'')+`已匹配 ${matched} / ${ids.length} 个编号`+(ids.length>matched?' 部分编号暂无官方评分':'')+(missingId?` 另有 ${missingId} 条缺少 tt 编号`:'');refreshRatingChoices();
 }catch(error){status.textContent=error.message;}finally{ratingAdminBusy=false;ratingsPanel.querySelectorAll('button,input,select').forEach(el=>el.disabled=false);}
}
$('#rating-query').onclick=()=>runRatingAdmin('single');$('#rating-missing').onclick=()=>runRatingAdmin('missing');$('#rating-refresh').onclick=()=>runRatingAdmin('all');
$('#life-admin-toggle').addEventListener('click',()=>{if(canEditMovies())refreshRatingChoices();});
const renderBeforeMovieAdmin=render;
render=()=>{renderBeforeMovieAdmin();if(canEditMovies()&&!$('#life-admin-panel').hidden&&!ratingAdminBusy)refreshRatingChoices();};
$('#rating-admin-file').onchange=event=>{const file=event.target.files[0];event.target.value='';if(file)void runRatingAdmin('all',file);};
lifeAuth.ready.then(()=>{const admin=canEditMovies();document.documentElement.dataset.movieAdmin=String(admin);ratingsPanel.hidden=!admin;if(admin){const onReady=()=>{if(hasData&&data.movies.length)refreshRatingChoices();};onReady();new MutationObserver(onReady).observe(document.documentElement,{attributes:true,attributeFilter:['data-collection']});}});
