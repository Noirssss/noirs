// Online editing is restricted to the collection administrator.
let lifeTravelSaving=false,placeEditingRevision=null;
const lifeTravelEditor=openTravelPlaceEditor;
openTravelPlaceEditor=(id,selection={})=>{
 if(lifeAuth.member?.role!=='admin'){if(id)showPublicRecord('travel',id);else if(selection.unitCode)openTravelCountry(selection.unitCode);return;}
 placeEditingRevision=lifeTravelRevision;lifeTravelEditor(id,selection);
 if(selection.addCity&&document.querySelector('#travel-place-dialog').open){$('#place-kind').value='city';$('#place-city').value='';$('#place-lon').value='';$('#place-lat').value='';placeCoordinateChosen=false;updatePlaceFields();$('#place-city').focus();}
};
openEditor=(kind,id)=>kind==='travel'?openTravelPlaceEditor(id):showPublicRecord(kind,id);
async function refreshOnlineTravel(){const state=await lifeAdminCall({action:'travel_get'});lifeTravelRevision=state.revision;data.travel=state.records;render();}
async function persistTravel(next){
 if(lifeTravelSaving||lifeAuth.member?.role!=='admin')return false;
 const deleted=data.travel.find(row=>!next.travel.some(other=>other.id===row.id));
 const record=next.travel.find(row=>JSON.stringify(row)!==JSON.stringify(data.travel.find(other=>other.id===row.id)))||next.travel.find(row=>row.id===placeEditingId);
 if(!deleted&&!record)return true;
 lifeTravelSaving=true;const controls=[...$('#travel-place-form').elements];const disabled=controls.map(el=>el.disabled);controls.forEach(el=>el.disabled=true);$('#place-error').textContent='正在保存到云端…';
 try{
  const state=await lifeAdminCall(deleted?{action:'travel_delete',id:deleted.id,revision:placeEditingRevision}:{action:'travel_save',record,revision:placeEditingRevision});
  data.travel=state.records;lifeTravelRevision=state.revision;hasData=true;render();$('#place-error').textContent='';return true;
 }catch(error){$('#place-error').textContent=error.message+'。若其他页面已修改，请关闭编辑、刷新页面后重新编辑。';return false;}
 finally{controls.forEach((el,i)=>el.disabled=disabled[i]);lifeTravelSaving=false;}
}
$('#travel-place-dialog').addEventListener('cancel',event=>{if(lifeTravelSaving)event.preventDefault();});
function travelCountryKey(record){return resolveTravelUnit(record)?.code||record.countryCode||record.country;}
const expandedTravelGroups=new Set();
const travelRow=record=>`<button class="travel-card travel-record-row" data-kind="travel" data-id="${escape(record.id)}"><span><strong>${escape(travelTitle(record))}</strong><span class="travel-record-note">${escape(record.note||'一段新的旅途。')}</span></span><span class="travel-record-date">${escape(record.date.replaceAll('-','.'))}<span>${lifeAuth.member?.role==='admin'?'编辑记录':'查看记录'} ↗</span></span></button>`;
function renderTravelHierarchy(){
 const q=$('#travel-search').value.trim().toLocaleLowerCase(),groups=new Map();
 for(const row of data.travel){const key=travelCountryKey(row);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(row);}
 const visible=[...groups].filter(([,rows])=>rows.some(row=>(row.country+row.city+(row.province||'')+row.note).toLocaleLowerCase().includes(q))).sort((a,b)=>b[1].reduce((d,r)=>r.date>d?r.date:d,'').localeCompare(a[1].reduce((d,r)=>r.date>d?r.date:d,'')));
 const list=$('#travel-list');list.classList.add('travel-hierarchy');
 list.innerHTML=visible.map(([key,all])=>{
  const country=all[0].country,unit=resolveTravelUnit(all[0]),countryMatch=country.toLocaleLowerCase().includes(q);
  const rows=all.filter(row=>countryMatch||(row.country+row.city+(row.province||'')+row.note).toLocaleLowerCase().includes(q)).sort((a,b)=>b.date.localeCompare(a.date));
  const cities=new Set(all.filter(r=>r.placeKind==='city'||!r.placeKind&&r.city).map(r=>(r.province||'')+'/'+r.city));
  const countryRows=rows.filter(r=>['country','territory'].includes(r.placeKind)),places=rows.filter(r=>!['country','territory'].includes(r.placeKind));
  const provinces=new Map();for(const row of places){const name=row.province||'城市';if(!provinces.has(name))provinces.set(name,[]);provinces.get(name).push(row);}
  return `<details class="travel-country-group" data-country="${escape(key)}" ${q||expandedTravelGroups.has(key)?'open':''}><summary><span class="travel-country-mark" aria-hidden="true">◎</span><span><strong>${escape(country)}</strong><span class="travel-country-meta">${unit?.kind==='territory'?'地区':'国家'} · ${cities.size} 座城市 · ${all.length} 条记录</span></span><span class="travel-country-chevron" aria-hidden="true">⌄</span></summary><div class="travel-country-content">${countryRows.length?'<section class="travel-subgroup"><h4>国家 / 地区到访记录</h4>'+countryRows.map(travelRow).join('')+'</section>':''}${[...provinces].map(([province,records])=>'<section class="travel-subgroup"><h4>'+escape(province)+'</h4>'+records.map(travelRow).join('')+'</section>').join('')}${!places.length?'<p class="travel-country-empty">还没有城市记录，可以逐一补上走过的地方。</p>':''}${lifeAuth.member?.role==='admin'?`<button class="text-button travel-add-city" data-unit="${escape(unit?.code||key)}">＋ 添加城市</button>`:''}</div></details>`;
 }).join('')||'<div class="empty">'+(q?'没有找到相关旅行。':'还没有旅行记录，记录第一站吧。')+'</div>';
 list.querySelectorAll('details').forEach(group=>group.addEventListener('toggle',()=>{if(group.open)expandedTravelGroups.add(group.dataset.country);else expandedTravelGroups.delete(group.dataset.country);}));
 list.querySelectorAll('.travel-add-city').forEach(button=>button.onclick=()=>openTravelPlaceEditor(null,{unitCode:button.dataset.unit,addCity:true}));
}
const renderBeforeTravelOnline=render;
render=()=>{renderBeforeTravelOnline();if(!hasData||document.body.dataset.page!=='travel')return;document.documentElement.dataset.travelAdmin=String(lifeAuth.member?.role==='admin');if(view==='countries')renderTravelHierarchy();else $('#travel-list').classList.remove('travel-hierarchy');};
function openTravelCountry(code){if(document.body.dataset.page!=='travel')return;expandedTravelGroups.add(code);view='countries';syncTravelView();render();requestAnimationFrame(()=>[...document.querySelectorAll('[data-country]')].find(el=>el.dataset.country===code)?.scrollIntoView({behavior:'smooth',block:'center'}));}
function syncTravelView(){document.querySelectorAll('[data-view]').forEach(button=>{const selected=button.dataset.view===view;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});}
if(document.body.dataset.page==='travel'){view='countries';syncTravelView();document.querySelector('[data-view="cards"]').textContent='全部记录';}
window.addEventListener('focus',()=>{if(hasData&&!lifeTravelSaving&&!$('#travel-place-dialog').open)void refreshOnlineTravel().catch(()=>{});});

