// ======================================
// Smooth Scroll
// ======================================
document.querySelectorAll('header a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior:'smooth' });
    }
  });
});

// ======================================
// Navbar Effect
// ======================================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.style.background = "rgba(8,17,31,.96)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.background = "rgba(8,17,31,.85)";
    header.style.boxShadow = "none";
  }
});

// ======================================
// Scroll Animation
// ======================================
const elements = document.querySelectorAll(
  ".hero-left,.hero-right,.about-text,.card,.project-card,.skill-box,.contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: .15 });

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = ".8s ease";
  observer.observe(el);
});

// ======================================
// Dashboard Hover
// ======================================
const dashboard = document.querySelector(".dashboard-card");

if(dashboard){
  dashboard.addEventListener("mousemove", (e) => {
    const rect = dashboard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    dashboard.style.background =
      `radial-gradient(circle at ${x}px ${y}px, rgba(34,166,242,.20), rgba(17,28,46,.95) 60%)`;
  });

  dashboard.addEventListener("mouseleave", () => {
    dashboard.style.background = "rgba(17,28,46,.88)";
  });
}

// ======================================
// Animated Counter
// ======================================
const counters = document.querySelectorAll(".stats h2");

counters.forEach(counter => {
  let original = counter.innerText;
  let value = parseInt(original);
  if(isNaN(value)) return;

  let count = 0;
  let speed = Math.ceil(value / 60);

  function update(){
    count += speed;
    if(count < value){
      counter.innerText = count + "+";
      requestAnimationFrame(update);
    } else {
      counter.innerText = original;
    }
  }
  update();
});

// ======================================
// Active Menu Highlight On Scroll
// ======================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});
