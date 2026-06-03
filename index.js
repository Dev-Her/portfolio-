function openMenu() {
  const body = document.body;
  document.body.classList.add("open");
}

function closeMenu() {
  const body = document.body;
  document.body.classList.remove("open");
}

// template_6h6k9bo
// service_8mnduim
// At-X1BsIB31_zpMRC

async function sendEmail(event) {
  event.preventDefault();

  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  loading.classList.remove("hidden");

  await emailjs.sendForm(
    "service_8mnduim",
    "template_6h6k9bo",
    event.target,
    "At-X1BsIB31_zpMRC"
  );

  form.reset();
  loading.classList.add("hidden");
  body.classList.add("success-open");

  setTimeout(() => {
    body.classList.remove("success-open");
  }, 5000);

  console.log("success");
}
