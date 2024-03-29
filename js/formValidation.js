const d = document,
  w = window;

export default function formValidation() {
  const $validForm = d.querySelector("form [required]");
  const validation = w.getComputedStyle($validForm, "valid");

  if (validation) {
    d.documentElement.style.setProperty("--pseudo-purp-text", "green");
  } else if (!validation) {
    d.documentElement.style.setProperty("--pseudo-purp-text", "red");
  } else {
    root.style.setProperty("--pseudo-purp-text", "#9475af");
  }
}

const $modal = d.querySelector(".modal-container"),
  $box = d.querySelector(".box"),
  $form = d.querySelector(".form"),
  $modalTitle = d.querySelector(".modal-title"),
  $modalText = d.querySelector(".modal-text"),
  $modalImg = d.querySelector(".modal-img"),
  $loader = d.querySelector(".none");

d.addEventListener("keyup", formValidation);

d.addEventListener("submit", (e) => {
  const $name = d.getElementById("name").value,
    $message = d.getElementById("message").value,
    $email = d.getElementById("email").value;
  $loader.style.display = "flex";
  e.preventDefault();

  fetch("https://formsubmit.co/ajax/davidfco.pozo@hotmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      Name: `${$name}`,
      Message: `${$message}`,
      Email: `${$email}`,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $loader.style.display = "none";
      $modalImg.src = "./logos and vectors/checkmark-64.svg";
      $modal.classList.add("active-modal");
      $box.classList.add("active-modal");
    })
    .catch((err) => {
      $modalImg.src = "./logos and vectors/xMark.svg";
      $loader.style.display = "none";
      $modalTitle.innerHTML = "Sorry!";
      $modalText.innerText = err.message;
      $modal.classList.add("active-modal");
      $box.classList.add("active-modal");
    });
});

d.addEventListener("click", (e) => {
  if (
    ($modal.classList.contains("active-modal") &&
      e.target.classList.contains("modal-btn")) ||
    e.target === $box
  ) {
    $modal.classList.remove("active-modal");
    $box.classList.remove("active-modal");
    $form.reset();
  }
});
