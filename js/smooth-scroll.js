const d = document;

export default function smoothscroll() {
d.querySelectorAll("section[data-scroll-spy]").scrollIntoView({ 
    behavior: 'smooth',
  })
}
