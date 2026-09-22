const langButtons = document.querySelectorAll('.lang-btn');
const langContents = document.querySelectorAll('.lang-content');
function setLanguage(lang){
  langButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  langContents.forEach(content=>content.classList.toggle('active',content.dataset.lang===lang));
  localStorage.setItem('aquasonica_lang',lang);
  document.documentElement.lang=lang;
}
langButtons.forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
window.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('aquasonica_lang');
  if(saved) setLanguage(saved);
  else{
    const nav=navigator.language.substring(0,2);
    if(nav==='es') setLanguage('es');
    else if(nav==='en') setLanguage('en');
  }
});
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
if(menuToggle){menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));}
if(navLinks){navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));}