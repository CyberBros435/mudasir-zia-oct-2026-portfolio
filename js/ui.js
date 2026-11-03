/* UI helpers: mobile menu, animation pause switch, auto-scrolling rows (touch friendly) */
(()=>{
const $=s=>document.querySelector(s),root=document.documentElement;
window.MO={paused:false};
const mo=$('#mo');
const setMO=p=>{MO.paused=p;root.classList.toggle('nomo',p);mo.textContent=p?'▶':'❚❚';mo.setAttribute('aria-pressed',String(p));const l=p?'Play animations':'Pause animations';mo.setAttribute('aria-label',l);mo.title=l;try{localStorage.setItem('mo',p?'1':'0')}catch(e){}};
mo.onclick=()=>setMO(!MO.paused);
try{if(localStorage.getItem('mo')==='1')setMO(true)}catch(e){}

/* mobile menu */
const nav=$('#nav'),bg=$('#burger');
const close=()=>{nav.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Open menu')};
bg.onclick=e=>{e.stopPropagation();const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',String(o));bg.setAttribute('aria-label',o?'Close menu':'Open menu')};
$('#navlinks').addEventListener('click',e=>{if(e.target.closest('a'))close()});
document.addEventListener('click',e=>{if(!nav.contains(e.target))close()});
addEventListener('keydown',e=>{if(e.key==='Escape')close()});
matchMedia('(min-width:1101px)').addEventListener('change',close);

/* auto-scrolling row: moves by itself, user can swipe/drag, pauses on hover (mouse) and while touching */
window.autoScroll=(box,dir,secs)=>{
 let pos=0,last=0,hold=0,vis=true,hov=false,ready=false;
 const half=()=>box.scrollWidth/2;
 const init=()=>{pos=dir<0?half():0;box.scrollLeft=pos;ready=true};
 requestAnimationFrame(()=>requestAnimationFrame(init));
 const bump=ms=>{hold=performance.now()+ms};
 ['touchstart','touchmove'].forEach(t=>box.addEventListener(t,()=>bump(4000),{passive:true}));
 box.addEventListener('touchend',()=>bump(3000),{passive:true});
 box.addEventListener('wheel',()=>bump(3000),{passive:true});
 box.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')bump(3000)});
 box.addEventListener('focusin',()=>bump(5000));
 if(matchMedia('(hover:hover)').matches){box.addEventListener('mouseenter',()=>{hov=true});box.addEventListener('mouseleave',()=>{hov=false})}
 if('IntersectionObserver' in window)new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(box);
 const tick=t=>{
  const dt=Math.min((t-last)/1000,.1);last=t;const h=half();
  if(ready&&h>0){
   if(Math.abs(box.scrollLeft-pos)>2)pos=box.scrollLeft;
   if(vis&&!document.hidden&&!MO.paused&&!hov&&t>hold){pos+=dir*(h/secs)*dt;box.scrollLeft=pos}
   let sl=box.scrollLeft;
   if(sl>=h){box.scrollLeft=pos=sl-h}else if(sl<1&&(dir>0||t>hold)){if(dir<0||t>hold){box.scrollLeft=pos=sl+h}}
  }
  requestAnimationFrame(tick)};
 requestAnimationFrame(tick);
};
})();
