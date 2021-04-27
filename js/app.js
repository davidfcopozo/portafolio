import mobileMenu from "./mobile-menu.js";
import theme from "./theme.js";

const d = document,
w =window;

d.addEventListener("DOMContentLoaded", ()=>{
  mobileMenu(".hamburger-btn", ".menu-bar a");
});


theme(".theme-btn", "dt-background", "dt-text");