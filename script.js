const body=document.body;
const themeToggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme');
if(saved==='dark') body.classList.add('dark');
function updateThemeIcon(){if(themeToggle) themeToggle.textContent=body.classList.contains('dark')?'☀':'☾'}
updateThemeIcon();
themeToggle?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light');updateThemeIcon()});
const menuToggle=document.getElementById('menuToggle'), navLinks=document.getElementById('navLinks');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.detail-btn').forEach(btn=>btn.addEventListener('click',()=>{const el=document.getElementById('m'+btn.dataset.meeting);el?.scrollIntoView({behavior:'smooth',block:'center'});el?.animate([{transform:'scale(.98)'},{transform:'scale(1)'}],{duration:350})}));
const search=document.getElementById('searchMeeting');
search?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('.meeting-card').forEach(card=>card.classList.toggle('hidden',!card.innerText.toLowerCase().includes(q)))});
