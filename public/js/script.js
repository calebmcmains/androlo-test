const enterEmailButton = document.querySelector(".enter-email");
const emailCollectionForm = document.querySelector(".section-email-collection");
const emailInput = document.querySelector(".email-input");
enterEmailButton.addEventListener("click", (event) => {
  event.target.classList.add("hidden");
  emailCollectionForm.classList.remove("hidden");
  emailInput.focus();
});
