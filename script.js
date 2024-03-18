document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to ordr buttons
    var orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(function(button) {
        // Listen for site user to click on the order button
        button.addEventListener("click", function() {
            // Display the thank you message
            showThankYouMessage();
        });
    });

    function showThankYouMessage() {
        // Create a div element for the message
        var thankYouDiv = document.createElement("div");
        thankYouDiv.classList.add("thank-you-message");
        // Display thank you message on screen
        thankYouDiv.textContent = "Thank you for your order!";

        document.body.appendChild(thankYouDiv);

        // Remove message from screen 
        setTimeout(function() {
            document.body.removeChild(thankYouDiv);
        }, 1000);
    }
});
