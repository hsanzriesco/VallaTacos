(function(){
var M=window.__VALLA_TACOS__||{},B=M.brand||{},$=function(s){return document.querySelector(s)};
function safe(f,n){try{f()}catch(e){console.warn('init falló:',n,e)}}
var cols=['#7a2a0a','#8a5a10','#5a1a0a','#6a3a08','#7a4a0a','#4a1408'];
safe(function(){var s=$('#splash');setTimeout(function(){s&&s.classList.add('hide')},2800)},'splash');
safe(function(){var t=$('#track');if(!t||t.children.length>0)return;
t.innerHTML=(M.dishes||[]).map(function(d,i){return '<article class="card" style="--g1:'+cols[i%6]+'"><img src="'+d.img+'" alt="'+d.name+'" loading="lazy" onerror="this.remove()"><small>'+d.tag+'</small><h3>'+d.name+'</h3><i>'+d.sub+'</i><ul>'+d.ingredients.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><p>'+d.text+'</p><b>'+d.price+'</b></article>'}).join('');
var n=t.children.length,p=$('#prog');function u(){var w=t.children[0].offsetWidth+20,k=Math.min(n,Math.round(t.scrollLeft/w)+1);p.textContent=('0'+k).slice(-2)+' / '+('0'+n).slice(-2)}
t.addEventListener('scroll',u);u()},'carta');
safe(function(){var s=$('#svc');if(s.children.length)return;s.innerHTML=(M.services||[]).map(function(x){return '<div class="svcb"><svg viewBox="0 0 24 24">'+x.icon+'</svg><h3>'+x.name+'</h3><p>'+x.text+'</p></div>'}).join('')},'servicios');
safe(function(){var r=$('#rev');if(r.children.length)return;r.innerHTML=(M.reviews||[]).map(function(x){return '<div class="rv"><p>“'+x+'”</p></div>'}).join('');$('#revlink').href=B.reviewsUrl||'#';$('#ig').href=B.instagram||'#'},'reseñas');
safe(function(){$('#burger').onclick=function(){this.classList.toggle('on');$('#links').classList.toggle('open')};
$('#links').onclick=function(){$('#links').classList.remove('open');$('#burger').classList.remove('on')}},'nav');
safe(function(){var c=$('#cur');if(matchMedia('(hover:none)').matches)return;
addEventListener('mousemove',function(e){c.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
document.querySelectorAll('a,button,.card').forEach(function(el){el.onmouseenter=function(){c.classList.add('on');c.firstChild.textContent=el.dataset.c||'ver'};el.onmouseleave=function(){c.classList.remove('on')}})},'cursor');
safe(function(){$('#f').onsubmit=function(e){e.preventDefault();var f=e.target,t='Hola Valla Tacos, soy '+f.n.value+' ('+f.t.value+'). '+(f.d.value?'Día: '+f.d.value+'. ':'')+(f.p.value?'Personas: '+f.p.value+'. ':'')+f.m.value;
window.open('https://wa.me/'+(B.whatsapp||'34633077757')+'?text='+encodeURIComponent(t),'_blank')}},'form');
safe(function(){var m=document.querySelectorAll('.mqt');m.forEach(function(x){x.innerHTML+=x.innerHTML})},'marquee');
safe(function(){if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);
gsap.from('.hero h1 span',{yPercent:60,opacity:0,stagger:.15,duration:1,delay:2.2});
document.querySelectorAll('.reveal').forEach(function(el){gsap.from(el,{y:40,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:'top 92%'}})});
gsap.utils.toArray('.card').forEach(function(c){gsap.from(c,{scale:.94,opacity:.4,scrollTrigger:{trigger:c,containerAnimation:null,start:'top 90%'}})});
},'gsap');
safe(function(){setTimeout(function(){document.querySelectorAll('.reveal,.card').forEach(function(e){e.style.opacity=1;e.style.transform='none'})},6000)},'seguridad');
})();
