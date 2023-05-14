// Get the form and button elements
const paymentForm = document.getElementById('paymentForm');
const paymentButton = document.getElementById('paymentButton');

// Function to check if all form inputs are filled
function checkFormValidity() {
  const formInputs = paymentForm.querySelectorAll('.form-control');
  let isFormValid = true;

  formInputs.forEach((input) => {
    if (!input.value) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  if (checkFormValidity()) {
    // Redirect to payment success page with the payment status
    window.location.href = 'payment-success.html?status=success';
  }
}

// Add event listeners for form inputs to check validity on change
const formInputs = paymentForm.querySelectorAll('.form-control');
formInputs.forEach((input) => {
  input.addEventListener('change', checkFormValidity);
});

// Add event listener for form submission
paymentForm.addEventListener('submit', handleSubmit);
