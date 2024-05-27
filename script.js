document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send an email to [your-email@example.com](mailto:your-email@example.com) with the form data
    const emailLink = `mailto:your-email@example.com?subject=Rent a Hitman Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = emailLink;
});
