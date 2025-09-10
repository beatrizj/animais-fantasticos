//Images list navigation
function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li")
  const tabContent = document.querySelectorAll("[data-tab='content'] section")

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo")

    function activeTab(i) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo")
      })
      const direcao = tabContent[i].dataset.anime
      tabContent[i].classList.add("ativo", direcao)
    }

    tabMenu.forEach((item, i) => {
      item.addEventListener("click", () => {
        activeTab(i)
      })
    })
  }
}
initTabNav();

//FAQ animation
function initAccordion () {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt")
  const activeClass = "ativo"

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion)
    })
  }
}
initAccordion();

//Smooth scroll
function initSmoothScroll() {
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
initSmoothScroll();

//Scroll animation
function initScrollAnimation() {
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
initScrollAnimation();