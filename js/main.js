(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rm=false,root=document.documentElement;
const tg=document.createElement('button');tg.className='tg';tg.setAttribute('aria-label','Switch colour theme');
const dark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
const lab=()=>{tg.textContent=dark()?'\u2600 Light':'\u263E Dark';tg.setAttribute('aria-label','Switch to '+(dark()?'light':'dark')+' mode')};
try{const s=localStorage.getItem('th');if(s)root.dataset.theme=s}catch(e){}
lab();tg.onclick=()=>{root.dataset.theme=dark()?'light':'dark';try{localStorage.setItem('th',root.dataset.theme)}catch(e){}lab()};$('.nr').appendChild(tg);
const bar=document.createElement('div');bar.className='bar';document.body.prepend(bar);
addEventListener('scroll',()=>{const h=root.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'},{passive:true});
const links=$$('nav a'),io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});$$('section[id]').forEach(s=>io2.observe(s));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.1});
$$('.card,.tl li,.stats,.cols>div').forEach(el=>{el.classList.add('rv');io.observe(el)});

const st=document.createElement('p');st.className='st';st.innerHTML='<i></i>Open to Tier 1 SOC roles and internships';$('h1').before(st);
const r=$('.role'),full=r.textContent;if(!rm){r.textContent='';r.classList.add('cur');let i=0;const ty=()=>{r.textContent=full.slice(0,++i);if(i<full.length)setTimeout(ty,32);else setTimeout(()=>r.classList.remove('cur'),1500)};setTimeout(ty,400)}
const cards=$$('.proj .card');cards.forEach(c=>{const t=c.textContent,k=[];if(/Splunk|SPL|Wireshark/.test(t))k.push('SOC');if(/Python|Flask/.test(t))k.push('Python');if(/Metasploit|Scapy|Bandit/.test(t))k.push('Offense');if(/HTML|Tkinter/.test(t))k.push('Web');c.k=k;
c.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-b.left+'px');c.style.setProperty('--my',e.clientY-b.top+'px')})});
const fl=document.createElement('div');fl.className='fb';
['All','SOC','Python','Offense','Web'].forEach((n,i)=>{const b=document.createElement('button');b.className='f'+(i?'':' on');b.textContent=n;b.onclick=()=>{$$('.f').forEach(x=>x.classList.toggle('on',x===b));cards.forEach(c=>c.classList.toggle('hide',n!=='All'&&!c.k.includes(n)))};fl.appendChild(b)});$('.proj').before(fl);
const rp=document.createElement('button');rp.className='tg';rp.textContent='Replay';rp.style.cssText='float:right;padding:2px 10px;font-size:12px';$('.log .h').prepend(rp);
rp.onclick=()=>$$('.log div').forEach(d=>{d.style.animationName='none';void d.offsetWidth;d.style.animationName=''});
const cb=document.createElement('button');cb.className='tg cb';cb.textContent='Copy email';cb.onclick=async()=>{try{await navigator.clipboard.writeText('ziamudasir744@gmail.com');cb.textContent='Copied'}catch(e){cb.textContent='Copy it from the link'}setTimeout(()=>cb.textContent='Copy email',2000)};$('#cr').append(cb);
})();;
(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rm=false;
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2600)};
async function save(name,data){const u=URL.createObjectURL(data),a=document.createElement('a');a.href=u;a.download=name;a.rel='noopener';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),6000);toast('Downloading '+name)}

const dg=$('#dg');$('#dc').onclick=()=>dg.close();dg.addEventListener('click',e=>{if(e.target===dg)dg.close()});
const show=(t,h)=>{$('#dt').textContent=t;$('#dbd').innerHTML=h;dg.showModal()};
const P=['IBM','Microsoft','Google','Cisco','ISC2','Fortinet','Johns Hopkins','EC-Council','Infosec','Edureka','EDUCBA','Splunk','CodeAlpha','TryHackMe'];
const row=(el,items)=>{el.innerHTML=items.concat(items).join('')};
row($('#m1'),P.map(p=>'<div class="mi">'+p+'</div>'));
row($('#m2'),A.badges.map((s,i)=>'<div class="mi"><img src="'+s+'" alt="" width="34" height="34">'+['AI Skills Fest 2026','ISC2 Candidate','Getting Started in Cybersecurity','Threat Landscape 3.0'][i]+'</div>'));
const cvs=$('#cvs');A.cv.forEach((c,i)=>{const d=document.createElement('div');d.className='cvc';d.innerHTML='<button class="cvp" type="button" aria-label="Zoom preview of '+c.t+'"><img src="'+c.thumb+'" alt="Preview of '+c.t+'" width="520" height="'+Math.round(520/c.r)+'" loading="lazy" decoding="async"><span class="zi">&#10530; Zoom</span></button><div><h3>'+c.t+'</h3><p>'+c.d+'</p><div class="row"><a class="mini s" href="'+c.pdf+'" download="'+c.n+'">Download PDF</a><button class="mini" type="button">Preview &amp; zoom</button></div></div>';const op=()=>window.PV&&PV.open(A.cv.map(x=>({t:x.t,s:x.img,r:x.r,d:x.pdf,n:x.n})),i);d.querySelector('.cvp').onclick=d.querySelector('button.mini').onclick=op;cvs.appendChild(d)});
const brief=c=>'# '+c.querySelector('h3').textContent+'\n\nStack: '+c.querySelector('.tags').textContent+'\n\n'+c.querySelector('p:not(.tags)').textContent+'\n\nAuthor: Mudasir Zia (github.com/CyberBros435)\n';
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
$$('.proj .card').forEach(c=>{const r=document.createElement('div');r.className='row';r.innerHTML='<button class="mini s" type="button">Preview</button><button class="mini" type="button">Download brief</button>';const [a,b]=r.children,t=c.querySelector('h3').textContent;
a.onclick=()=>show(t,'<p class="tags" style="font-weight:600">'+c.querySelector('.tags').textContent+'</p><p>'+c.querySelector('p:not(.tags)').textContent+'</p><p>Code and write-ups live on <a href="https://github.com/CyberBros435">GitHub</a>.</p>');
b.onclick=()=>save(slug(t)+'.md',new Blob([brief(c)],{type:'text/markdown'}));c.appendChild(r)});

const tp=$('#top');tp.onclick=()=>scrollTo({top:0,behavior:rm?'auto':'smooth'});addEventListener('scroll',()=>tp.classList.toggle('on',scrollY>700),{passive:true});
})();;
(()=>{const T=['<h3>Brute-force chain against a login page</h3><p>I ran a custom brute-forcer against a Flask login target in my own lab and sent Windows logon events to Splunk. The goal: catch the attack, not just log it.</p><p>Result: a validated true positive with a 58-second detection window, and 4 events spanning 362 seconds grouped into one incident.</p>','<h3>What the logs showed</h3><p>Repeated failed logons (EventCode 4625) from one source in a short window. A simplified version of the search pattern:</p><div class="cd">index=main EventCode=4625\n| stats count by src_ip, Account_Name\n| where count &gt; 5</div><p>This is an illustration of the approach, not a copy of the lab query.</p>','<h3>True positive, grouped into one incident</h3><p>Many failures from one source against one account in a short span match Brute Force (T1110). I used <code>transaction</code> so an analyst sees one incident instead of four separate alerts.</p>','<h3>What I would do next</h3><p>Enrich the source address with threat-intel lookups, add an account lockout threshold, tune the alert threshold to cut false positives, and file an incident report with the timeline and indicators.</p>'];const pn=document.getElementById('pn'),bs=[...document.querySelectorAll('.ts')];const set=i=>{bs.forEach((b,j)=>b.classList.toggle('on',i===j));pn.innerHTML=T[i]};bs.forEach((b,i)=>b.onclick=()=>set(i));set(0)})();;
(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rm=false;
const G=[['SOC and blue team',[['Splunk SPL',72],['Windows Event Log analysis',78],['Log analysis',80],['Alert triage',75],['Incident documentation',85],['Report writing',82],['MITRE ATT&CK',68]]],['Network and offensive tools',[['Wireshark',72],['Nmap',75],['Burp Suite',60],['Kali Linux',65],['Linux command line',68],['OWASP Top 10',70]]],['Development',[['Python',82],['HTML and CSS',85],['JavaScript',70],['Flask and Django',70],['SQL (MySQL, SQLite)',70],['Git and GitHub',72]]]];
const lv=v=>v>=80?'Strong':v>=65?'Proficient':'Developing';
G.forEach(([t,a])=>{const d=document.createElement('div');d.innerHTML='<h3>'+t+'</h3>'+a.map(([n,v])=>'<div class="sb" data-v="'+v+'"><div class="sh"><span>'+n+'</span><span class="sv"><b>0</b>% · '+lv(v)+'</span></div><div class="tr"><i></i></div></div>').join('');$('#lv').appendChild(d)});
const go=el=>{if(el.classList.contains('sb')){const v=+el.dataset.v,i=el.querySelector('i'),b=el.querySelector('b');i.style.width=v+'%';if(rm){b.textContent=v;return}const t0=performance.now(),f=t=>{const p=Math.min((t-t0)/1400,1);b.textContent=Math.round(v*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
if(el.classList.contains('rg')&&el.dataset.p)el.querySelector('.p').style.strokeDashoffset=276.5*(1-el.dataset.p/100)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');go(e.target);io.unobserve(e.target)}}),{threshold:.25});
$$('section h2,section>.sub,.faq details').forEach(el=>{el.classList.add('rv');io.observe(el)});
$$('.proj,.ach,.edu,.cols,.faq').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--d',Math.min(i,8)*70+'ms')));
$$('.card').forEach(c=>c.addEventListener('transitionend',e=>{if(e.propertyName==='transform')c.classList.add('done')}));
const st=$('#stage'),tl=$('#tilt');if(st&&!rm){st.addEventListener('pointermove',e=>{const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform='rotateY('+x*24+'deg) rotateX('+(-y*24)+'deg)'});st.addEventListener('pointerleave',()=>tl.style.transform='');addEventListener('scroll',()=>{st.style.transform='translateY('+Math.min(scrollY*.12,60)+'px)'},{passive:true})}
if(!rm)$$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.12)+'px '+((e.clientY-r.top-r.height/2)*.2)+'px'});b.addEventListener('pointerleave',()=>b.style.translate='')});
$$('.stage .fl').forEach(el=>{let sx=0,sy=0,ox=0,oy=0,on=false;el.addEventListener('pointerdown',e=>{on=true;sx=e.clientX;sy=e.clientY;try{el.setPointerCapture(e.pointerId)}catch(_){}});el.addEventListener('pointermove',e=>{if(on)el.style.margin=(oy+e.clientY-sy)+'px 0 0 '+(ox+e.clientX-sx)+'px'});const end=e=>{if(!on)return;on=false;ox+=e.clientX-sx;oy+=e.clientY-sy};el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end)});
})();
