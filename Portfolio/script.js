/* Smooth scroll */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Active nav link */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

/* Fade-in on scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* Ripple effect */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = e.offsetX + "px";
    ripple.style.top = e.offsetY + "px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

/* Safe project links */
document.querySelectorAll(".project a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Project link coming soon 🚧");
    }
  });
});

/* Hire Me */
function showMessage() {
  alert("Thanks for reaching out! Let's build something great 🚀");
}
