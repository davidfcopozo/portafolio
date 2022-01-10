const d = document;
let ls = localStorage;


export default function theme(darkModeBtn, bgDarkClass, txtDarkClass) {
  const $darkThemeBtn = d.querySelector(darkModeBtn),
  $bgSelectors = d.querySelectorAll("[data-bgDark]"),
  $txtSelectors = d.querySelectorAll("[data-txtDark]"),
  root = document.querySelector(":root");

    let moon = "🌙",
    sun = "☀️";

  const lightMode = ()=>{
   $bgSelectors.forEach(el => el.classList.remove(bgDarkClass));
       $darkThemeBtn.textContent = moon;
       root.style.setProperty("--pseudo-background", '#12232e');

   $txtSelectors.forEach(el => el.classList.remove(txtDarkClass));

       ls.setItem("theme", "light");
 }

  const darkMode = ()=>{
   $bgSelectors.forEach(el => el.classList.add(bgDarkClass));
    $darkThemeBtn.textContent = sun;
    root.style.setProperty("--pseudo-background", 'white');

   $txtSelectors.forEach(el => el.classList.add(txtDarkClass));

   ls.setItem("theme", "dark");
 }

 d.addEventListener("click", (e)=>{
   if(e.target.matches(darkModeBtn)) {
     if($darkThemeBtn.textContent === moon) {
       darkMode();
     } else {
       lightMode();
     }
   }
 });

 d.addEventListener("DOMContentLoaded", (e)=>{
   if(ls.getItem("theme")=== null) ls.setItem("theme", "light")

  if(ls.getItem("theme") === "light") lightMode();

  if(ls.getItem("theme") === "dark") darkMode();
 });
}