export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  })
}