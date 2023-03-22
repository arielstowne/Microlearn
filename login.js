// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

const signupForm = document.getElementById("loginForm");
const newPassword = document.getElementById("loginUsername");
const newPasswordError = document.getElementById("newPasswordError");

newPassword.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (newPassword.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    newPasswordError.textContent = ""; // Reset the content of the message
    newPasswordError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

signupForm.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!newPassword.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (newPassword.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    newPasswordError.textContent = "You need to enter an email address.";
  } else if (newPassword.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    newPasswordError.textContent = "Entered value needs to be an email address.";
  } else if (newPassword.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    newPasswordError.textContent = `Email should be at least ${newPassword.minLength} characters; you entered ${newPassword.value.length}.`;
  }

  // Set the styling appropriately
  newPasswordError.className = "error active";
}
