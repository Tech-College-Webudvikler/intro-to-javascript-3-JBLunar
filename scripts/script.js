// ASSIGNMENT 3.1

// Regular expression to check if email looks correct
const emailRegex = /^\S+@\S+\.\S+$/;

// Get the form and message element
const form = document.getElementById('signup');
const userMessage = document.getElementById('userMessage');

// When the form is submitted
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from sending

    // Get what the user typed in
    const email = form.elements['emailField'].value;
    const password = form.elements['passwordField'].value;
    const repeatPassword = form.elements['passwordRepeatField'].value;

    // Check if email is valid
    if (!emailRegex.test(email)) {
        userMessage.textContent = "Skriv en gyldig email.";
        return;
    }

    // Check if password is long enough
    if (password.length < 8) {
        userMessage.textContent = "Password skal være mindst 8 tegn.";
        return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
        userMessage.textContent = "Passwords er ikke ens.";
        return;
    }

    // If everything is okay
    userMessage.textContent = "Du er tilmeldt!";
});





// ASSIGNMENT 3.2


// 1. Find the button
const button = document.getElementById('clickCount');

// 2. Make a variable to count clicks
let count = 0;

// 3. Listen for clicks
button.addEventListener('click', function() {
    // 4. Add 1 to count
    count = count + 1; // or count++

    // 5. Show how many times you clicked
    button.innerHTML = "Du har klikket " + count + " gange";
});



// ASSIGNMENT 3.3


