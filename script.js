// Gift exchange javascript
// redirect function for browse items page
function redirectToBrowseItems() {
    window.location.href = 'item_copy.html';
};

document.getElementById('browseButton').addEventListener('click', redirectToBrowseItems);

// redirect function for start a trade page
function redirectToStartTrade() {
    window.location.href = 'start_trade.html';
};

document.getElementById('startTradeButton').addEventListener('click', redirectToStartTrade);