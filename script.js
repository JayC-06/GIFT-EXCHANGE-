function redirectToBrowseItems() {
    window.location.href = 'item.html';
};

document.getElementById('browse').addEventListener('click', redirectToBrowseItems);

// redirect function for start a trade page
function redirectToStartTrade() {
    window.location.href = 'trade.html';
};

document.getElementById('trade').addEventListener('click', redirectToStartTrade);

// redirect function for shopping cart page
function redirectToShoppingCart() {
    window.location.href = 'cart.html'
};

document.getElementById('checkout').addEventListener('click', redirectToShoppingCart)

function redirectToHome() {
    window.location.href = 'index.html';
};

document.getElementById('home').addEventListener('click', redirectToHome);
