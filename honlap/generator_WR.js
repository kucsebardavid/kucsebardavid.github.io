function generator() {
    var WRs = ["Julio Jones", "Julian Edelman", "Stefon Diggs", "Davante Adams", "Tyreek Hill", "Brandin Cooks"];
    var randomNumber = Math.floor(Math.random() * WRs.length);
    document.getElementById("placeholder").innerHTML = WRs[randomNumber];
}