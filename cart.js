// Retrieve cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

let total = 0;

cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>
    `;
    cartItemsElement.appendChild(cartItem);
    total += item.price;
});

//
