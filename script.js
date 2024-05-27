// Select all elements with the class 'service-btn'
// These elements are the service buttons
const serviceBtns = document.querySelectorAll('.service-btn');

// Iterate through each button in the NodeList 'serviceBtns'
serviceBtns.forEach((btn) => {
  // Add a click event listener to each button
  btn.addEventListener('click', () => {
    // Get the service type from the button's 'data-service' attribute
    const serviceType = btn.getAttribute('data-service');

    // Display an alert to the user with the selected service type
    alert(`You ordered the ${serviceType} package.`);
  });
});
