class Validate {
  constructor() {
    this.form = document.querySelector("form");
  }
  validateEmail() {
    const email = this.form.querySelector("#email");
    const output = this.form.querySelector('output[for="email"]');
    if (email.validity.valueMissing) {
      this.showError(output, "The email field is empty.");
    } else if (email.validity.typeMismatch) {
      this.showError(output, "Please enter a valid email address.")
    }
  }
  showError(outputElement, message) {
    outputElement.classList.add("active");
    outputElement.textContent = message;
  }
  hideError(outputElement) {
    outputElement.classList.remove("active");
    outputElement.textContent = "";
  }
}
