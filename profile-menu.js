const profileRoot=document.querySelector('#life-profile'),profileAvatar=document.querySelector('#life-avatar');
const profileTrigger=document.createElement('button');profileTrigger.type='button';profileTrigger.id='life-profile-toggle';profileTrigger.setAttribute('aria-label','打开账号菜单');profileTrigger.setAttribute('aria-expanded','false');profileTrigger.setAttribute('aria-controls','life-profile-menu');
profileAvatar.hidden=false;if(!profileAvatar.getAttribute('src'))profileAvatar.src='./default-avatar.svg';profileAvatar.alt='账号头像';profileAvatar.onerror=()=>{if(!profileAvatar.src.endsWith('/default-avatar.svg'))profileAvatar.src='./default-avatar.svg';};profileTrigger.append(profileAvatar);
const profileMenu=document.createElement('div');profileMenu.id='life-profile-menu';profileMenu.hidden=true;
const profileName=document.querySelector('#life-username');profileName.className='profile-menu-name';profileMenu.append(profileName);
const uploadLabel=profileRoot.querySelector('label');uploadLabel.className='profile-menu-upload';profileMenu.append(uploadLabel,ownPasswordButton,document.querySelector('#life-profile-status'));
uploadLabel.tabIndex=0;uploadLabel.setAttribute('role','button');uploadLabel.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();uploadLabel.querySelector('input').click();}};
const signout=document.querySelector('#life-signout');signout.textContent='退出登录';profileMenu.append(signout);profileRoot.replaceChildren(profileTrigger,profileMenu);
const profileAdmin=document.querySelector('#life-admin-toggle');profileMenu.insertBefore(profileAdmin,signout);profileAdmin.addEventListener('click',()=>closeProfileMenu());
document.querySelector('.navlinks').insertBefore(profileRoot,document.querySelector('#color-mode'));
function closeProfileMenu(focus=false){profileMenu.hidden=true;profileTrigger.setAttribute('aria-expanded','false');if(focus)profileTrigger.focus();}
profileTrigger.onclick=()=>{profileMenu.hidden=!profileMenu.hidden;profileTrigger.setAttribute('aria-expanded',String(!profileMenu.hidden));};
profileTrigger.onkeydown=event=>{if(event.key==='ArrowDown'){event.preventDefault();profileMenu.hidden=false;profileTrigger.setAttribute('aria-expanded','true');ownPasswordButton.focus();}};
document.addEventListener('pointerdown',event=>{if(!profileRoot.contains(event.target))closeProfileMenu();});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!profileMenu.hidden){event.preventDefault();closeProfileMenu(true);}});
ownPasswordButton.addEventListener('click',()=>closeProfileMenu());document.querySelector('#life-avatar-upload').addEventListener('change',()=>closeProfileMenu());
