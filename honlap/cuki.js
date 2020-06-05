function kepek() {
    var myPix = new Array("img/panda1.png", "img/panda2.png", "img/panda3.png", "img/corgi1.png", "img/corgi2.png", "img/corgi3.png", "img/goldie.png", "img/szivcicak.png");
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
}