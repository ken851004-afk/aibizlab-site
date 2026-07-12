// Theme toggle (persisted)
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");
document.querySelector(".theme-btn")?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Nav blur on scroll
const nav = document.querySelector("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
document.querySelector(".burger")?.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
