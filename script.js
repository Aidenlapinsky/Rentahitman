// Get all service buttons
const serviceBtns = document.querySelectorAll('.service-btn');

// Add event listener to each service button
serviceBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Get the service type from the data attribute
    const serviceType = btn.getAttribute('data-service');

    // Alert the user with the service type
    alert(`You ordered the ${serviceType} package.`);
  });
});
