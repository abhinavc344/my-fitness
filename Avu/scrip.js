// common.js (or utils.js)

// Function to handle quantity changes (used in cart, diet, equipment)
function handleQuantityChange(container, updateCallback) {
    container.querySelectorAll('.minus-btn, .plus-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let quantity = parseInt(input.value);
            if (this.classList.contains('minus-btn')) {
                quantity = Math.max(1, quantity - 1);
            } else if (this.classList.contains('plus-btn')) {
                quantity = Math.min(10, quantity + 1); // Or any max you want
            }
            input.value = quantity;
            if (updateCallback) {
                updateCallback(quantity);
            }
        });
    });
}

// Example usage (you'll need to adapt to your specific needs):
// On cart.html, diet.html, equipment.html:
const productContainers = document.querySelectorAll('.cart-item, .product-box'); // Adjust selector as needed

productContainers.forEach(container => {
    handleQuantityChange(container, (newQuantity) => {
        //  Update any relevant data/UI here (e.g., subtotal)
        console.log('Quantity updated:', newQuantity);
    });
});


// ---  Potentially Common UI Functions (Adapt as needed) ---

// Example: Simple Alert Message (Can be enhanced)
function showAlert(message, type = 'info') {
    alert(message); // Replace with a nicer modal or notification if desired
    //  You could append a styled div to the body instead of using alert()
}

// Example:  Basic Fade In Effect (If you have elements you commonly fade)
function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        element.style.opacity = progress / duration;
        if (progress < duration) {
            window.requestAnimationFrame(animation);
        }
    }
    window.requestAnimationFrame(animation);
}


// ---  Additional Considerations  ---

// 1.  Fetch API Wrappers: If you make frequent API calls, create functions to handle common fetch requests (e.g., `fetchJson(url, method, body)`).

// 2.  Form Handling: If you have common form patterns (validation, submission), create reusable functions.

// 3.  Date/Time Utilities:  If you frequently work with dates, create functions for formatting, parsing, etc.

// 4.  DOM Manipulation Helpers:  Functions to add/remove classes, create elements, etc., can be useful if you do a lot of dynamic UI work.