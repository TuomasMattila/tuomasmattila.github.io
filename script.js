//Selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

//Adding click listener to a button
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    //Getting user entered values
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;
    //Javascript validations
    if(emailValue.includes('@')) {
        alert('Thank you for your message.');
    } else {
        alert('Oh no. The email you entered is not valid.')
    }
});