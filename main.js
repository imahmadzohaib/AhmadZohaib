const menuBtn = document.querySelector('.menu-bar');
const menuPage=document.querySelector('.menuPage');
const backBtn=document.querySelector('.back-btn');
const backBtn2=document.querySelectorAll('.back-btn2');
const mainHead=document.querySelector('.main-head');

menuBtn.addEventListener('click',()=>{
    if(menuPage){
        menuPage.classList.toggle('open');
    }
})

backBtn.addEventListener('click',()=>{
    if(menuPage.classList.contains('open')){
        menuPage.classList.toggle('open');
    }

})
backBtn2.forEach(button => {
    button.addEventListener('click', () => {
        if(menuPage.classList.contains('open')){
            menuPage.classList.remove('open'); // Use remove instead of toggle for certainty
        }
    });
});

window.addEventListener('scroll',()=>{
    if (window.scrollY>=50) {
        mainHead.classList.add('scrolled');
    }else{
        mainHead.classList.remove('scrolled');
    }
} );


/* ============================================================
   Featured Projects — data-driven cards + detail modal
   ============================================================ */

const I = {
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  dash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  pulse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  utensils:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  terminal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  sprout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>'
};
const codeIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
const liveIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';
const CATLABEL={web:'Web App',frontend:'Frontend',technical:'Technical'};

/* Each project may include an optional `image` field (path relative to the
   portfolio root, e.g. 'src/finance.png'). When present the card and modal
   show that screenshot; otherwise they fall back to the gradient icon tile. */
const PROJECTS=[
  {id:'finance',title:'Finance App',category:'web',badge:'Full Stack',icon:I.chart, image:'src/finance.png',
   blurb:'Personal finance tracker for income, expenses, savings & investments with trends over time.',
   tech:['Nuxt 4','Nuxt UI','Supabase','Tailwind 4','Zod'],
   overview:'A full-stack personal-finance app built on Nuxt 4 and Supabase. Users track income, expenses, savings and investments through a responsive dashboard with real authentication and a live database.',
   features:['Passwordless magic-link auth','Income / expense / savings / investment tracking','Categorized expenses (food, housing, car…)','Period-over-period trend comparison','Full CRUD with instant UI updates','Light & dark mode','Profile avatars via Supabase Storage','Faker-seeded ~2 years of demo data'],
   github:'https://github.com/imahmadzohaib/Finance-App',live:'https://finance-app-alpha-flax.vercel.app/'},

  {id:'dashboard',title:'Nuxt Dashboard',category:'web',icon:I.dash,image:'src/dashboard.png',
   blurb:'Modern, responsive admin dashboard shell with analytics and an interactive calendar.',
   tech:['Nuxt 4','Vue 3','Nuxt UI','Tailwind 4','Chart.js','FullCalendar'],
   overview:'A polished admin-dashboard UI built with Nuxt 4 and Nuxt UI. Ships a full analytics page and an interactive calendar with a collapsible sidebar and light/dark theming. (Front-end prototype — data is currently hard-coded, backend planned.)',
   features:['Analytics: multi-series traffic line chart','KPI stat cards with mini charts','Traffic-by-channel & device breakdown','Top-pages ranking','Interactive month calendar (FullCalendar)','Drag-friendly events + “New Event” dialog','Collapsible sidebar & sticky top bar','Fully responsive, light/dark themes'],
   github:'https://github.com/imahmadzohaib/dashboard',live:'https://dashboard-imahmadzohaib.netlify.app'},

  {id:'medical',title:'Medical Dashboard — Ember',category:'web',icon:I.pulse,image:'src/medical.png',
   blurb:'Clean hospital / clinic admin dashboard — patient flow, occupancy & revenue analytics.',
   tech:['Nuxt 4','shadcn-vue','Unovis','Tailwind 4','TypeScript'],
   overview:'A hospital/clinic admin dashboard built with Nuxt 4 and shadcn-vue. A UI-first prototype with three fully built pages visualising patient flow, occupancy and revenue. (Sample data is fictitious; backend planned.)',
   features:['Dashboard: daily KPI cards','24-hour patient vitals monitor','Bed-occupancy rings & department workload','Analytics: page-views trend + revenue bars','Top pages / top countries tables','Patient Overview master–detail view','Filter patients by status','Demographics, medications & appointments'],
   github:'https://github.com/imahmadzohaib/medical-dashboard',live:'https://medical-dashboard-two-beta.vercel.app/'},

  {id:'recipe',title:'Recipe App',category:'frontend',icon:I.utensils,image:'src/recipe.png',
   blurb:'Fast, responsive recipe search powered by TheMealDB — instant search & detail modals.',
   tech:['Vanilla JS','Vite','TheMealDB API','CSS3'],
   overview:'A fast, framework-free recipe search app built with vanilla JavaScript and Vite, pulling live data from TheMealDB. Focused on snappy search, polished loading states and accessibility.',
   features:['Instant search across TheMealDB','Quick-search category chips','Responsive 1–4 column card grid','Detail modal with ingredient checklist + steps','Auto “Watch tutorial” (YouTube) + source links','Shimmer skeleton loaders','Empty & error states','Full keyboard nav + reduced-motion support'],
   github:'https://github.com/imahmadzohaib/Recipe-App',live:'https://imahmadzohaib.github.io/Recipe-App'},

  {id:'portfolio',title:'Portfolio',category:'frontend',icon:I.user,image:'src/portfolio.png',
   blurb:'This portfolio — a responsive personal site with a filterable project showcase.',
   tech:['HTML5','CSS3','JavaScript'],
   overview:'A responsive personal portfolio built from scratch with HTML, CSS and vanilla JavaScript — featuring a filterable project gallery, detail modals, a mobile slide-in menu, and skills/experience/education/contact sections. (You’ll add the repo & live links.)',
   features:['Responsive layout (mobile → desktop)','Project filtering by category','Project detail modals','Mobile slide-in navigation','Skills, experience & education sections','Contact form'],
   github:'https://github.com/imahmadzohaib/AhmadZohaib',live:''},

  {id:'wordgame',title:'Word Guessing Game',category:'technical',icon:I.terminal,image:'src/wordguess.png',
   blurb:'Console word-search puzzle in C++ — find a hidden word in a 10×10 letter grid.',
   tech:['C++ (C++11)','File I/O','HTML/JS demo'],
   overview:'A console word-search puzzle written in C++ for a Programming Fundamentals course. A random word is hidden in a 10×10 grid; the player has three attempts (with an optional hint) to find it. Includes a browser re-creation for a quick live demo.',
   features:['Randomized 10×10 grid each round','Word placed horizontally / vertically / diagonally','Three attempts with feedback','Hint reveals the word length','+5 points per word found','Persistent top-3 leaderboard file','External, editable word bank','Input validation & replay'],
   github:'https://github.com/imahmadzohaib/Word-Guessing-Game',live:'https://imahmadzohaib.github.io/Word-Guessing-Game/'},

  {id:'university',title:'University Course Registration',category:'technical',icon:I.cap,image:'src/course.png',
   blurb:'Console course-registration engine in C++ built on hand-rolled data structures.',
   tech:['C++11','Hash Map','BST','Priority Queue','Linked List'],
   overview:'A CLI course-registration engine in modern C++ that models seats, waitlists, timetable clashes and reporting — each subsystem paired with the data structure best suited to it (BST, priority queue and linked list all implemented from scratch).',
   features:['Add students/courses with duplicate protection','Register / drop with seat-capacity limits','Auto-waitlist with automatic promotion','Timetable clash prevention','Seniority-based priority promotion','Sorted listings via BST in-order traversal','Feedback ratings + popularity report','Export catalog to CSV & JSON'],
   github:'https://github.com/imahmadzohaib/University-Course-Registration-System',live:'https://imahmadzohaib.github.io/University-Course-Registration-System/'},

  {id:'farm',title:'Farm Management',category:'technical',icon:I.sprout,
   blurb:'Console farm-records system in C++17 demonstrating clean object-oriented design.',
   tech:['C++17','OOP','Makefile / CMake'],
   overview:'A console application that keeps the day-to-day records of a working farm across livestock, fields, stock and staff — doubling as a showcase of object-oriented design in C++17 (inheritance, polymorphism, templates, RAII).',
   features:['Four sections: Animals, Crops, Inventory, Staff','Full CRUD with unique, sorted IDs','Twelve record types','Consolidated report with totals & low-stock alerts','File persistence (.dat) with defensive loading','Robust input validation','No memory leaks (CI-verified)','Template Method + Abstract Factory patterns'],
   github:'https://github.com/imahmadzohaib/Farm-Management',live:''},
];

const projectGrid=document.getElementById('projectGrid');
const projectOverlay=document.getElementById('projectOverlay');
const projectModal=document.getElementById('projectModal');

function thumbMedia(p){
  return p.image
    ? `<img class="thumb-img" src="${p.image}" alt="${p.title} screenshot" loading="lazy">`
    : p.icon;
}

function cardHTML(p){
  return `<div class="project-item" data-cat="${p.category}">
    <div class="thumb ${p.category}${p.image?' has-img':''}">
      ${thumbMedia(p)}
      <span class="cat-chip">${CATLABEL[p.category]}</span>
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p class="blurb">${p.blurb}</p>
      <div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
      <button class="read-more" data-id="${p.id}">Read More →</button>
    </div>
  </div>`;
}

if(projectGrid){
  projectGrid.innerHTML=PROJECTS.map(cardHTML).join('');

  // filter tabs
  document.querySelectorAll('.project-types-item').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.project-types-item').forEach(t=>t.classList.remove('visited'));
      tab.classList.add('visited');
      const f=tab.dataset.filter;
      document.querySelectorAll('.project-item').forEach(c=>{
        c.style.display=(f==='all'||c.dataset.cat===f)?'flex':'none';
      });
    });
  });

  // read-more -> open detail modal
  projectGrid.addEventListener('click',e=>{
    const b=e.target.closest('.read-more');
    if(b) openModal(b.dataset.id);
  });
}

function openModal(id){
  if(!projectOverlay||!projectModal) return;
  const p=PROJECTS.find(x=>x.id===id);
  if(!p) return;
  const liveBtn=p.live
    ? `<a class="btn btn-live" href="${p.live}" target="_blank" rel="noopener">${liveIcon} Live Demo</a>`
    : `<span class="btn btn-disabled">${liveIcon} Demo coming soon</span>`;
  const codeBtn=p.github
    ? `<a class="btn btn-code" href="${p.github}" target="_blank" rel="noopener">${codeIcon} View Code</a>`
    : `<span class="btn btn-disabled">${codeIcon} Link coming soon</span>`;
  const hero=p.image
    ? `<div class="modal-hero"><img src="${p.image}" alt="${p.title} screenshot"></div>`
    : '';
  projectModal.innerHTML=`
    <button class="modal-close" aria-label="Close">&times;</button>
    ${hero}
    <div class="modal-head"><h2>${p.title}</h2>${p.badge?`<span class="badge-lg">${p.badge}</span>`:''}</div>
    <p class="overview">${p.overview}</p>
    <h4>Tech Stack</h4>
    <div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
    <h4>Key Features</h4>
    <ul class="feature-list">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <div class="modal-actions">${codeBtn}${liveBtn}</div>`;
  projectOverlay.classList.add('open');
  document.body.style.overflow='hidden';
  projectModal.querySelector('.modal-close').addEventListener('click',closeModal);
}

function closeModal(){
  if(!projectOverlay) return;
  projectOverlay.classList.remove('open');
  document.body.style.overflow='';
}

if(projectOverlay){
  projectOverlay.addEventListener('click',e=>{if(e.target===projectOverlay) closeModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal();});
}
