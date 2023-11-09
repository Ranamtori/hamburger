const pole_wartosc= document.getElementById("wartosc");
const przycisk_dodaj= document.getElementById("dodaj");
const przycisk_kolor= document.getElementById("kolor");
let x = 0;

przycisk_dodaj.addEventListener("click", () => {
    x++;
    pole_wartosc.innerText = x;
});

wartosc.addEventListener("click", () => {
    console.log(x);
});

przycisk_kolor.addEventListener("click", () => {
    pole_wartosc.classList.toggle("red");
 });
