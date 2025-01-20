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

const shoppingCartList = document.getElementById("shoppingcart");   // <div id="shoppingCart">  </div>
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
console.log("Current Saved Cart: ", cartItems);
        // we initalize a temp data variable
let totalPrice = 0;  // 0 -> 40 -> 160

const PriceCalc = cartItems.forEach((item, index) => {
    const sumPrice = totalPrice + item.price;
    totalPrice = sumPrice;
    console.log("Current Total: ", totalPrice);
            // totalPrice = totalPrice + item.price;
    const newItem = document.createElement('li');  // <li></li>
    newItem.textContent = `${item.name} - $${item.price}  `;   // <li>Headpohes - $120</li>
    shoppingCartList.appendChild(newItem);
    const removalButton = document.createElement("button");
    removalButton.innerText = "Remove";
    removalButton.setAttribute("class", "button");
    newItem.appendChild(removalButton);

    const removeProduct = () => {
        totalPrice -= item.price;
        newItem.remove();
        totalEl.textContent = `Total Price: $${totalPrice}`;
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        };

    removalButton.addEventListener('click', removeProduct);
});

console.log("Sum Total: ", totalPrice);
const pricePosition = document.getElementById("price");
const totalEl = document.createElement('p');
totalEl.textContent = `Total Price: $${totalPrice}`;
pricePosition.appendChild(totalEl);

const orderBtn = document.getElementById('placeorder');
function submitCart(){

    const itemsList = cartItems.map(item => `${item.name}, $${item.price}`);
    const itemsListString = itemsList.join(', ');
    const purchasePos = document.getElementById('purchaseText');
    purchasePos.innerHTML = '';
    const purchaseMsg = document.createElement('p');
    purchaseMsg.textContent = `Thank you for purchasing ${itemsListString}`;
    const priceMsg = document.createElement('p');
    priceMsg.textContent = `Your total is $${totalPrice} plus tax`
    purchasePos.appendChild(purchaseMsg);
    purchasePos.appendChild(priceMsg);
    console.log(`Thank you for purchasing ${itemsListString}`);
    console.log(`Your total is $${totalPrice} plus tax`);
};
   orderBtn.addEventListener('click', () => {
    const emptyPos = document.getElementById('purchaseText');
    const emptyMsg = document.createElement('p');

    if (cartItems.length === 0){
        emptyMsg.textContent = `Please add your items to the cart`;
        emptyPos.innerHTML = '';
        emptyPos.appendChild(emptyMsg);
} else { 
    submitCart();
}
});