// Mindegy, hogy ebben a függvényben nem ugyanaz a paraméter neve, mint a másikban, a sorrend a lényeg!

function calcAmount() {
    let price = document.querySelector('#burger').value;
    let amountInput = document.querySelector("input[name = 'amountInput']");
    let amountNumber = parseInt(amountInput.value, 10);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber)
    
// Mindegy, hogy mi a paraméter neve, a lényeg, hogy  függvényen belül ugyanaz legyen!

    function showSumPrice (pricePerProduct, quantity) {   
    let showAmount = document.querySelector("span.show-amount");
        if (quantity > 10) {alert("Maximum 10 terméket vásárolhat!")}
           else if (quantity < 1) { alert("Minimum egy terméket kell vásárolnia!") }
                       else {let amount = parseInt(amountInput.value) * pricePerProduct;
                           showAmount.innerHTML = amount;}}
}

