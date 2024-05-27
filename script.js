// Select all elements with the class 'service-btn'
const serviceBtns = document.querySelectorAll('.service-btn');

// Iterate through each button in the NodeList 'serviceBtns' using 'for-of' loop
for (const btn of serviceBtns) {
  // Add a click event listener to each button
  btn.addEventListener('click', () => {
    // Get the service type from the button's 'dataset.service' property
    const serviceType = btn.dataset.service;

    // Display an alert to the user with the selected service type
    alert(`You ordered the ${serviceType} package.`);
  });
}
