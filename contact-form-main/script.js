document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear all previous error messages
    clearErrors();

    let isValid = true;

    // Validate first name
    const firstName = document.getElementById("firstName");
    if (firstName.value.trim() === "") {
      showError("firstNameError", "This field is required");
      firstName.classList.add("error");
      isValid = false;
    }

    // Validate last name
    const lastName = document.getElementById("lastName");
    if (lastName.value.trim() === "") {
      showError("lastNameError", "This field is required");
      lastName.classList.add("error");
      isValid = false;
    }

    // Validate email
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError("emailError", "Please enter a valid email address");
      email.classList.add("error");
      isValid = false;
    }

    // Validate query type
    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!queryType) {
      showError("queryTypeError", "Please select a query type");
      isValid = false;
    }

    // Validate message
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      showError("messageError", "This field is required");
      message.classList.add("error");
      isValid = false;
    }

    // Validate consent checkbox
    const consent = document.getElementById("consent");
    if (!consent.checked) {
      showError("consentError", "You must consent to be contacted");
      isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
      document.getElementById("successMessage").style.display = "block";
      document.getElementById("contactForm").reset(); // Reset the form after submission
    }
  });

// Helper function to show an error message
function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

// Helper function to clear all error messages
function clearErrors() {
  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach(function (error) {
    error.innerText = "";
    error.style.display = "none"; // Ensure error messages are hidden by default
  });

  const inputFields = document.querySelectorAll(
    ".form-group input, .form-group textarea"
  );
  inputFields.forEach(function (input) {
    input.classList.remove("error");
  });
}
