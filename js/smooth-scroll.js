const d = document;

export default function smoothscroll(target) {
  const $sections = d.querySelectorAll(target);

  $sections.forEach((el) =>
    el.addEventListener("click", (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      e.preventDefault();

      if (targetId != "#intro") {
        window.scrollTo({
          top: d.querySelector(targetId).offsetTop - 65,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: d.querySelector(targetId).offsetTop - 98,
          behavior: "smooth",
        });
      }
    })
  );
}
