const $=s=>document.querySelector(s),q=new URLSearchParams(location.search);
let C='All',S='';
const card=(g,i=0)=>`<a class="card" style="--c:${g.color};--i:${i}" href="game.html?id=${g.id}"><div class="th"><span>${g.title[0]}</span><i class="pl">▶</i></div><p>${g.title}<small>${g.cat} · Free</small></p></a>`;
const grid=a=>a.length?`<div class="grid">${a.map(card).join('')}</div>`:'<p>No games found yet.</p>';
function layout(){
document.body.insertAdjacentHTML('afterbegin','<header><a class="logo" href="index.html"><b>PLAY</b>Hub</a><nav><a href="index.html">Home</a><a href="index.html#games">Games</a><a href="page.html?p=about">About</a><a href="page.html?p=contact">Contact</a></nav></header>');
document.body.insertAdjacentHTML('beforeend','<footer><p><a href="page.html?p=about">About</a><a href="page.html?p=contact">Contact</a><a href="page.html?p=privacy">Privacy Policy</a><a href="page.html?p=terms">Terms</a></p><p>© 2026 PlayHub. Free games for everyone.</p></footer>')}
function side(){
const hs=GAMES.map(g=>[g.title,+localStorage.getItem('hs_'+g.id)||0]).filter(r=>r[1]).sort((a,b)=>b[1]-a[1]).slice(0,5);
return `<div class="box ad">Ad space<br>300×250</div><div class="box prem"><span class="badge">PREMIUM</span><h3>Go ad-free</h3><p>Premium membership is coming soon.</p></div><div class="box"><h3>Top scores</h3>${hs.length?'<ol>'+hs.map(r=>`<li>${r[0]}: ${r[1]}</li>`).join('')+'</ol>':'<p>Play a game to set a score.</p>'}</div>`}
function show(c){
C=c;$('#chips').innerHTML=['All',...CATS].map(n=>`<button class="chip${n==c?' on':''}" onclick="show('${n}')">${n}</button>`).join('');
$('#list').innerHTML='<h2>'+(c=='All'?'All games':c)+'</h2>'+grid(GAMES.filter(g=>(c=='All'||g.cat==c)&&g.title.toLowerCase().includes(S)))}
function find(v){S=v.trim().toLowerCase();show(C)}
function home(){
C='All';S='';
const pop=[...GAMES].sort((a,b)=>b.plays-a.plays),neu=[...GAMES].sort((a,b)=>b.date.localeCompare(a.date)),f=pop[0];
$('#main').innerHTML=`<section class="hero" style="--c:${f.color}"><span class="o o1"></span><span class="o o2"></span><div><span class="tag">Featured game</span><h1>${f.title}</h1><p>${f.cat} · Free to play · No download</p><a class="btn" href="game.html?id=${f.id}">▶ Play now</a></div></section><div class="stats"><div>${GAMES.length} free games</div><div>No sign-up needed</div><div>Works on mobile</div></div><input class="search" aria-label="Search games" placeholder="Search games" oninput="find(this.value)"><div class="chips" id="chips"></div><div id="list"></div><h2>Popular games</h2>${grid(pop.slice(0,6))}<h2>New games</h2>${grid(neu.slice(0,6))}`;
show('All');$('#side').innerHTML=side()}
function gamepage(){
const g=GAMES.find(x=>x.id==q.get('id'))||GAMES[0];document.title=g.title+' | PlayHub';
$('#main').innerHTML=`<a class="back" href="index.html">← All games</a><h1 style="margin:0 0 4px;color:#1F3A5F">${g.title}</h1><p>${g.cat} · Click the game, then use arrow keys or touch.</p><div class="frame"><iframe src="${g.src}" title="${g.title}"></iframe></div><div class="ad" style="min-height:90px;margin-top:18px">Ad space 728×90</div><h2>More games</h2>${grid(GAMES.filter(x=>x!=g))}`;
$('#side').innerHTML=side();
const fr=$('iframe');
addEventListener('message',e=>{if(e.source!==fr.contentWindow)return;const s=+(e.data&&e.data.score)||0;if(s>(+localStorage.getItem('hs_'+g.id)||0)){localStorage.setItem('hs_'+g.id,s);$('#side').innerHTML=side()}})}
const P={about:['About us','PlayHub is a free browser gaming portal. Replace this text with your own story.'],contact:['Contact','Email: hello@example.com (replace with your address).'],privacy:['Privacy Policy','Replace with your policy. Explain cookies, advertising and stored scores.'],terms:['Terms','Replace with your terms of use.']};
function pages(){const p=P[q.get('p')]||P.about;document.title=p[0]+' | PlayHub';$('#main').innerHTML=`<div class="box"><h1 style="margin-top:0;color:#1F3A5F">${p[0]}</h1><p>${p[1]}</p></div>`;$('#side').innerHTML=side()}
