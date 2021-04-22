const d = document;


export default function mobileMenu($humburgerBtn) {
  const $mobileMenupanel = d.querySelector(".menu-bar"),
  $hamburger = d.querySelector("humburger");
  d.addEventListener("click", (e)=>{
    if(e.target.matches($humburgerBtn) || e.target.matches(`${$humburgerBtn} *`)) {
      $mobileMenupanel.classList.toggle("active");
    }
  })
}