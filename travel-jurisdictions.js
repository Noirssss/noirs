let travelGeoActive=null,travelGeoRequest=0,travelGeoBound=false;
function travelStateLabel(state){const duplicates=travelGeoActive.states.filter(row=>row.name===state.name);return (state.zh||state.name)+(duplicates.length>1?' · '+state.isoCode:'');}
function travelSelectedState(){const name=$('#place-province').value.trim();return travelGeoActive?.states.find(state=>[travelStateLabel(state),state.name,state.zh].includes(name))||null;}
function travelCityChoices(query=''){
 if(!travelGeoActive)return [];const state=travelSelectedState(),province=$('#place-province').value.trim(),q=query.trim().toLocaleLowerCase();
 return travelGeoActive.cities.filter(row=>(!province||state&&row[2]===state.isoCode)&&(!q||(row[0]+' '+(row[5]||'')).toLocaleLowerCase().includes(q))).slice(0,250);
}
function renderTravelCityChoices(){const list=$('#travel-city-options');list.replaceChildren();for(const city of travelCityChoices($('#place-city').value)){const option=document.createElement('option');option.value=city[5]||city[0];option.label=city[0]+' · '+(travelGeoActive.states.find(state=>state.isoCode===city[2])?.name||'');list.append(option);}}
function applyTravelSelectedCity(){
 if(!travelGeoActive)return;const name=$('#place-city').value.trim(),state=travelSelectedState(),province=$('#place-province').value.trim();
 const matches=travelGeoActive.cities.filter(row=>(row[0].toLocaleLowerCase()===name.toLocaleLowerCase()||row[5]===name)&&(!province||state&&row[2]===state.isoCode));
 if(matches.length!==1)return;const city=matches[0],parent=travelGeoActive.states.find(state=>state.isoCode===city[2]);
 if(parent)$('#place-province').value=travelStateLabel(parent);$('#place-city').value=city[5]||city[0];$('#travel-city-english').textContent=city[5]?city[0]:'';$('#travel-province-english').textContent=parent?.zh?parent.name:'';
 const latitude=Number(city[3]),longitude=Number(city[4]);if(city[3]!==null&&city[4]!==null&&Number.isFinite(latitude)&&Number.isFinite(longitude)){$('#place-lon').value=longitude;$('#place-lat').value=latitude;placeCoordinateChosen=true;}
}
function bindTravelGeo(){
 if(travelGeoBound)return;travelGeoBound=true;
 const provinces=document.createElement('datalist');provinces.id='travel-province-options';const cities=document.createElement('datalist');cities.id='travel-city-options';$('#travel-place-form').append(provinces,cities);
 $('#place-province').setAttribute('list',provinces.id);$('#place-city').setAttribute('list',cities.id);bindTravelDateControls();const save=$('#travel-place-form').onsubmit;$('#travel-place-form').onsubmit=event=>{applyTravelSelectedCity();return save(event);};
 for(const kind of ['city','province']){const hint=document.createElement('small');hint.className='travel-name-english';hint.id='travel-'+kind+'-english';$('#place-'+kind).parentElement.append(hint);}
 $('#place-unit').addEventListener('change',()=>void updateTravelLocationOptions());
 $('#place-province').addEventListener('input',()=>{$('#place-city').value='';$('#place-lon').value='';$('#place-lat').value='';$('#travel-city-english').textContent='';const state=travelSelectedState();$('#travel-province-english').textContent=state?.zh?state.name:'';placeCoordinateChosen=false;renderTravelCityChoices();});
 $('#place-city').addEventListener('input',()=>{renderTravelCityChoices();if(travelSelectedState())applyTravelSelectedCity();});$('#place-city').addEventListener('change',applyTravelSelectedCity);$('#place-city').addEventListener('blur',applyTravelSelectedCity);
}
async function updateTravelLocationOptions(){
 bindTravelGeo();const request=++travelGeoRequest,unit=travelUnits.find(row=>row.code===$('#place-unit').value),code=unit?.alpha2;
 travelGeoActive=null;$('#travel-province-options').replaceChildren();$('#travel-city-options').replaceChildren();$('#travel-city-english').textContent='';$('#travel-province-english').textContent='';$('#place-date').value=formatTravelDate($('#place-date').value);$('#place-date').setCustomValidity('');
 $('#place-province').placeholder='正在加载所选国家的省州';$('#place-city').placeholder='正在加载所选国家的城市';
 if(!/^[A-Z]{2}$/.test(code||'')){ $('#place-province').placeholder='填写省 / 州';$('#place-city').placeholder='填写城市';return;}
 try{
  const geo=await loadTravelGeo(code);if(request!==travelGeoRequest)return;travelGeoActive=geo;
  for(const state of geo.states){const option=document.createElement('option');option.value=travelStateLabel(state);$('#travel-province-options').append(option);}
  const state=travelSelectedState();if(state){$('#place-province').value=travelStateLabel(state);$('#travel-province-english').textContent=state.zh?state.name:'';}applyTravelSelectedCity();
  $('#place-province').placeholder=unit.label+'的省 / 州 也可手动填写';$('#place-city').placeholder=unit.label+'的城市 输入名称查找';renderTravelCityChoices();
 }catch{if(request!==travelGeoRequest)return;$('#place-province').placeholder='资料未加载 可手动填写省州';$('#place-city').placeholder='资料未加载 可手动填写城市';}
}
function travelFlagMarkup(unit){const code=unit?.alpha2?.toLowerCase();return /^[a-z]{2}$/.test(code||'')?'<img class="travel-flag" src="./flags/'+code+'.svg" width="32" height="24" alt="">':'◎';}


