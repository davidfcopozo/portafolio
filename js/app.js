import mobileMenu from "./mobile-menu.js";
import theme from "./theme.js";

const d = document,
w =window;

d.addEventListener("DOMContentLoaded", ()=>{
  mobileMenu(".toggle-btn");
  theme();
});