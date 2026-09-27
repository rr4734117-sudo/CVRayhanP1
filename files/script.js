// scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
},{threshold:0.15});
reveals.forEach(r=>io.observe(r));

// active nav on scroll
const navLinks = document.querySelectorAll('#navLinks a');
const sections = document.querySelectorAll('section[id]');
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(l=>l.classList.remove('active'));
      const link = document.querySelector(`#navLinks a[href="#${entry.target.id}"]`);
      if(link) link.classList.add('active');
    }
  });
},{rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s=>spy.observe(s));

// mobile menu
const burger = document.getElementById('burger');
const navLinksEl = document.getElementById('navLinks');
burger.addEventListener('click', ()=> navLinksEl.classList.toggle('open'));
navLinks.forEach(l=> l.addEventListener('click', ()=> navLinksEl.classList.remove('open')));

// contact form (in-memory only, no storage/network)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  this.reset();
});
