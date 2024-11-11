const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    
})

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".slider-section");

let posicion = 0;
let contador = 0;
const desplazamiento = 100 / sliderSections.length;

let intervalo = setInterval(() => moveToRight(), 3000);

btnRight.addEventListener("click", () => {
  clearInterval(intervalo);
  moveToRight();
  intervalo = setInterval(() => moveToRight(), 3000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(intervalo);
  moveToLeft();
  intervalo = setInterval(() => moveToRight(), 3000);
});

function moveToRight() {
  if (contador >= sliderSections.length - 1) {
    posicion = 0;
    contador = 0;
    slider.style.transition = "none";
  } else {
    contador++;
    posicion += desplazamiento;
  }
  slider.style.transform = `translateX(-${posicion}%)`;
}

function moveToLeft() {
  if (contador <= 0) {
    posicion = (sliderSections.length - 1) * desplazamiento;
    contador = sliderSections.length - 1;
  } else {
    contador--;
    posicion -= desplazamiento;
  }
  slider.style.transform = `translateX(-${posicion}%)`;
}
