document.addEventListener('DOMContentLoaded', () => {
    // Event listener for "Add to Cart" button
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    }

    // Event listener for "Checkout" button
    const checkoutButton = document.getElementById('checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Proceeding to checkout!');
        });
    }
});
