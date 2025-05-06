const tabMenu = document.querySelectorAll(".js-tab-menu li")
const tabContent = document.querySelectorAll(".js-tab-content section")

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo")

  function activeTab(i) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo")
    })
    tabContent[i].classList.add("ativo")
  }

  tabMenu.forEach((item, i) => {
    item.addEventListener("click", () => {
      activeTab(i)
    })
  })
}