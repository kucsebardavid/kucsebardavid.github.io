function calc() {
    let pricePerMonth = document.querySelector("#pricePerMonth").value;
    let monthNumber = document.querySelector("#months").value;
    let extra = document.querySelector("#extra").value;
    let urgent = document.querySelector("#urgent").value
    let amount = (parseInt(pricePerMonth) * parseInt(monthNumber)) + parseInt(extra) + parseInt(urgent);
    if(!isNaN(amount))
    document.getElementById("amount").innerHTML=amount
}