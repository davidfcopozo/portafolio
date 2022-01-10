const d = document;

export default function smoothscroll(target) {
  const $sections = d.querySelectorAll(target);

$sections.forEach(el => el.addEventListener("click", (e)=>{
  const targetId = e.currentTarget.getAttribute("href");
  e.preventDefault();

  if(targetId != "#intro") {
    window.scroll({
        top: d.querySelector(targetId).offsetTop - 40,
        behavior: "smooth"
      })
    } else {
    window.scroll({
        top: d.querySelector(targetId).offsetTop - 98,
        behavior: "smooth"
      })

  }
    console.log(d.querySelector(targetId).offsetTop)
}))

  

}