

export default function mobileMenu($humburgerBtn, menuLinks, $secions, $body) {
  const d = document;
  d.addEventListener("click", (e)=>{
    const $mobileMenupanel = d.querySelector(".menu-bar");
    const $sections = d.querySelector("body");
    
  
    
    if(e.target.matches($humburgerBtn) || e.target.matches(`${$humburgerBtn} *`)) {
      $mobileMenupanel.classList.toggle("active");
      d.querySelector($humburgerBtn).classList.toggle("is-active");
    }

    if(e.target.matches(menuLinks)) {
      $mobileMenupanel.classList.remove("active");
      d.querySelector($humburgerBtn).classList.remove("is-active");
      
    }
    
   if($mobileMenupanel.classList.contains("active") && e.target.id !== "navbar" && e.target.id !== "toggle" && e.target.id !== "inner-toggle" && e.target.id !== "in-toggle") {
    if(e.target.matches(menuLinks) || e.target.matches($secions)|| e.target.matches($body)){
      $mobileMenupanel.classList.remove("active");
      d.querySelector($humburgerBtn).classList.remove("is-active");
    }
    } 
    
  });
}


