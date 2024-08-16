document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // Clear the error message
    errorMessage.textContent = '';

    // Proceed with account creation logic (e.g., send data to server)
    console.log('Account created:', { username, email, password });

    // You can replace the console.log with actual account creation logic
    alert('Account created successfully!');
});
