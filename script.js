// SCRIPT.JS

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Pieteikums veiksmīgi nosūtīts!");

    bookingForm.reset();

});