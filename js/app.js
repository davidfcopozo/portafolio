import mobileMenu from "./mobile-menu.js";
import theme from "./theme.js";
import scroll_spy from "./scroll_spy.js";
import smoothScroll from "./smooth-scroll.js";
import formValidation from "./formValidation.js";


const d = document,
w =window;
 
 d.addEventListener("DOMContentLoaded", ()=>{
  mobileMenu(".hamburger-btn", ".menu-bar a", ".section", "body");
  scroll_spy();
  smoothScroll("a[data-scroll-spy]");
  formValidation();
});




theme(".theme-btn", "dt-background", "dt-text");