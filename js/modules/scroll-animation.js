export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6; //pega o valor de 60% da tela do usuário

    function scrollAnimation() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top; //verifica o valor do topo do elemento
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if (isSectionVisible) {
          item.classList.add("ativo");
        }
      })
    }

    window.addEventListener("scroll", scrollAnimation);

    scrollAnimation()
  }
}