const d = document;

export default function smoothscroll(target) {
  const $sections = d.querySelectorAll(target);
 /*  const id = target.getAttribute("id");
  console.log(id) */

$sections.forEach(el => el.addEventListener("click", (e)=>{
  const targetId = e.currentTarget.getAttribute("href");
  /* 
   */
  e.preventDefault();
  window.scrollTo({
      top: d.querySelector(targetId).offsetTop,
      behavior: "smooth"
    })
}))

  

}