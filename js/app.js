import mobileMenu from "./mobile-menu.js";
import theme from "./theme.js";
import scroll_spy from "./scroll_spy.js";
import smoothScroll from "./smoothscroll.js";


const d = document,
w =window;

d.addEventListener("DOMContentLoaded", ()=>{
  mobileMenu(".hamburger-btn", ".menu-bar a");
  scroll_spy();
  smoothScroll();
});


theme(".theme-btn", "dt-background", "dt-text");