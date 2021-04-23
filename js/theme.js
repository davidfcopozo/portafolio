const d = document;
let ls = localStorage;

export default function theme(darkModeBtn, bgDarkClass, txtDarkClass) {
  const $darkThemeBtn = d.querySelector(darkModeBtn),
  $bgSelectors = d.querySelectorAll("[data-bgDark]"),
  $txtSelectors = d.querySelectorAll("[data-txtDark]");

    let moon = `<img src="./logos and vectors/Social media vectors/Feather icons/moon.svg" alt="">`,
    sun = `<img src="./logos and vectors/Social media vectors/Feather icons/sun.svg" alt="">`;

  const lightMode = ()=>{
   $bgSelectors.forEach(el => el.classList.remove(bgDarkClass));
       $darkThemeBtn.innerHTML = moon;

   $txtSelectors.forEach(el => el.classList.remove(txtDarkClass));

       ls.setItem("theme", "light");
 }

  const darkMode = ()=>{
   $bgSelectors.forEach(el => el.classList.add(bgDarkClass));
    $darkThemeBtn.innerHTML = sun;

   $txtSelectors.forEach(el => el.classList.add(txtDarkClass));

       ls.setItem("theme", "dark");
 }

 d.addEventListener("click", (e)=>{
   if(e.target.matches(darkModeBtn)) {
     if($darkThemeBtn.innerHTML === moon) {
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