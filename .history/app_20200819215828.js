let a = document.querySelector('.li1');
let b = document.querySelector('.oMnie');
let c = document.querySelector('.li2');
let d = document.querySelector('.metoda');
let e = document.querySelector('.li3');
let f = document.querySelector('.cennik');
let g = document.querySelector('.li4');
let d = document.querySelector('.kontakt');


a.addEventListener('click', e => {
  b.classList.toggle("nowa");
  d.classList.remove("nowa");
});

// a.addEventListener('click', e => {
//   c.classList.toggle("nowa");
// });


let c = document.querySelector('.li2');
let d = document.querySelector('.metoda');
//let C = document.querySelector('.metoda');

c.addEventListener('click', e => {
  d.classList.toggle("nowa");
  b.classList.remove("nowa");
});