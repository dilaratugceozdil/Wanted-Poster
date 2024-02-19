// window.onload = function () {
//     const myMuzik = document.getElementById('myMuzik');
//     console.log(myMuzik);
//     myMuzik.muted = true;
//     myMuzik.play();
// }

// window.addEventListener('load', function(){
//     var myMuzik = document.getElementById('myMuzik');
//     console.log(myMuzik);
//     myMuzik.play();
// })


document.getElementById('bustedButton').addEventListener('click', function () {
    var redLetter = document.getElementById('redLetter');
    var myContanier = document.getElementById('myContanier');
    var buttonMuzik = document.getElementById('buttonMuzik');
    redLetter.style.display = 'flex';
    myContanier.style.filter = 'grayscale(100%)';
    buttonMuzik.play();
})

setTimeout(() => {
    myContanier.style.background = 'url("../assets/parchment.jpg")';
    myContanier.style.filter = "";
    redLetter.style.display = "none";
  }, 3000);

