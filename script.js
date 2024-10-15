// Array to store cart items
let cart = [];

// Add to cart functionality
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productId = product.getAttribute('data-id');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const productName = product.querySelector('p').textContent;

        // Add product to the cart
        cart.push({ id: productId, name: productName, price: productPrice });

        // Update the cart count in the header
        cartCountElement.textContent = cart.length;

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
