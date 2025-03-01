document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login form");
    const signupForm = document.querySelector("#signup form");
    const chatInput = document.querySelector("#chat input");
    const chatButton = document.querySelector("#chat button");
    const chatBox = document.querySelector(".chat-box");
    const cartButton = document.querySelector("#cart button");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login successful!");
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Signup successful!");
        });
    }
    
    if (cartButton) {
        cartButton.addEventListener("click", function () {
            alert("Proceeding to checkout!");
        });
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    showSection('login'); 
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("checkout-btn");
    const cartItems = document.getElementById("cart-items");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            let confirmCheckout = confirm("Do you want to proceed to checkout?");
            if (confirmCheckout) {
                alert("Thank you for your purchase!");
                cartItems.innerHTML = "<p>Your cart is empty.</p>";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("Logout");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            let confirmCheckout = confirm("Do you want to Logout?");
            if (confirmCheckout) {
                alert("Logout Successfully!");
                window.location.href = "#login";
                showSection("login");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("checkout-btn");
    const cartItems = document.getElementById("cart-items");
    const addToCartButtons = document.querySelectorAll(".add-to-cart"); 

    function updateCartMessage() {
        if (cartItems.children.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
        }
    }

    function updateCheckoutButton() {
        const actualItems = cartItems.querySelectorAll(".cart-item").length;
        
        if (actualItems === 0) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = "0.5"; 
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = "1"; 
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-name");
            const itemPrice = this.getAttribute("data-price");

            // Remove "Your cart is empty" message if present
            if (cartItems.innerHTML.includes("Your cart is empty")) {
                cartItems.innerHTML = "";
            }

            // Create a new cart item
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `<p>${itemName} - $${itemPrice}</p> 
                                  <button class="remove-btn">Remove</button>`;

            cartItems.appendChild(cartItem);
            alert(`${itemName} has been added to the cart!`);

            updateCheckoutButton();

            // Remove item from cart
            cartItem.querySelector(".remove-btn").addEventListener("click", function () {
                alert("Item removed from cart.");
                cartItem.remove();

                updateCartMessage();
                updateCheckoutButton();
            });
        });
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cartItems.children.length === 0 || cartItems.innerHTML.includes("Your cart is empty")) {
                alert("No items available in the cart.");
            } else {
                let confirmCheckout = confirm("Do you want to proceed to checkout?");
                if (confirmCheckout) {
                    alert("Thank you for your purchase!");
                    cartItems.innerHTML = "<p>Your cart is empty.</p>";
                    updateCheckoutButton();
                }
            }
        });
    }

    // Initialize the cart message on page load
    updateCartMessage();
    updateCheckoutButton();
});

document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-message");
    const chatBox = document.getElementById("chat-box");
    let currentUser = ""; // To track the current chat user

    // Function to send a message
    function sendMessage() {
        let messageText = chatInput.value.trim();
        if (messageText === "") return; // Prevent empty messages

        // Create a new message element
        let messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `<strong>You:</strong> ${messageText}`;

        // Add message to chat box
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message

        // Clear input field
        chatInput.value = "";
    }

    // Event Listener for Send Button Click
    document.querySelector(".chat-input button").addEventListener("click", sendMessage);

    // Event Listener for Enter Key Press
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            sendMessage();
        }
    });

    // Function to open chat with a user
    window.openChat = function (userName) {
        currentUser = userName;
        document.getElementById("chat-window").style.display = "block";
        document.getElementById("chat").style.display = "none"; // Hide chat list
        document.getElementById("chat-title").innerText = `Chat with ${userName}`;

        // Add a welcome message from the user
        chatBox.innerHTML = `<div class="message received"><strong>${userName}:</strong> Hey, how are you?</div>`;
    };

    // Function to go back to chat list
    window.goBack = function () {
        document.getElementById("chat-window").style.display = "none";
        document.getElementById("chat").style.display = "block";
    };
});
