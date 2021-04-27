const d = document;


export default function mobileMenu($humburgerBtn, menuLinks) {
  const $mobileMenupanel = d.querySelector(".menu-bar"),
  $menu = d.querySelectorAll(".menu-bar");
  d.addEventListener("click", (e)=>{
    if(e.target.matches($humburgerBtn) || e.target.matches(`${$humburgerBtn} *`)) {
      $mobileMenupanel.classList.toggle("active");
      d.querySelector($humburgerBtn).classList.toggle("is-active");
    }

    if(e.target.matches(menuLinks)) {
      $mobileMenupanel.classList.remove("active");
      d.querySelector($humburgerBtn).classList.remove("is-active");
    }
  })
}