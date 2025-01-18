const productID = ['product0', 'product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10'];

const products = [
{ name: "China Plates", price: 300 },
{ name: "Dog Sketch", price: 50 },
{ name: "Golf Clubs", price: 10000 },
{ name: "Hairtie", price: 10 },
{ name: "Headphones", price: 120 },
{ name: "Socks", price: 50 },
{ name: "Necklace", price: 250 },
{ name: "Remote", price: 99 },
{ name: "Teddybear", price: 40 },
{ name: "Ugly Sweater", price: 0},
{ name:"Tv", price: 450 }
];

const buttons = document.getElementsByClassName("button expanded");

const getProduct = function(event){
    event.preventDefault();

    const clickID = event.target.id;

    const index = productID.indexOf(clickID);
    if (index !== -1) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cartItems));

    };
};
for (let button of buttons) {
    button.addEventListener('click', getProduct);
    };

        const shoppingCartList = document.getElementById("shoppingcart");
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.forEach(item => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.name} - $${item.price}`;
            shoppingCartList.appendChild(newItem);
        });

    // TODO: calculate the total price of the items and ignore the product price of trade items
