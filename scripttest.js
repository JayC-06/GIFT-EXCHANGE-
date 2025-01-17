const item = {productName, productPrice};
const productName = ['China Plates', 'Dog Sketch', 'Golf Clubs', 'Hairtie', 'Headphones', 'Necklace', 'Remote', 'Teddybear', 'Tv', 'Ugly Sweater']; //creates an empty array to for the products to go
const productPrice = ['$300', '$50', '$10000', '$10', '$120', '$250', '$99', '$40', '$450', '$0'];

let shoppingCart = [];
function updateCart() {
shoppingCart.push(item);
}

localStorage.setItem('shoppingCart', prodArrayString); //stores the selected products into local storage

//TODO: Get products from local storage and put into checkout modal
const checkoutProducts = function {
checkoutBtn.addEventListener('click', checkoutProducts());
localStorage.getItem(selectedItem);

const productList = function {

}
    // TODO: calculate the total price of the items and ignore the product price of trade items
