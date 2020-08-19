let a = document.querySelector('.li1');
let b = document.querySelector('.oMnie');
let c = document.querySelector('.li2');
let d = document.querySelector('.metoda');
let e = document.querySelector('.li3');
let f = document.querySelector('.cennik');
let g = document.querySelector('.li4');
let h = document.querySelector('.kontakt');

a.addEventListener('click', e => {
  b.classList.toggle("nowa");
  d.classList.remove("nowa");
  f.classList.remove("nowa");
  h.classList.remove("nowa");
});


c.addEventListener('click', e => {
  d.classList.toggle("nowa");
  b.classList.remove("nowa");
  f.classList.remove("nowa");
  h.classList.remove("nowa");
});

e.addEventListener('click', e => {
  f.classList.toggle("nowa");
  b.classList.remove("nowa");
  d.classList.remove("nowa");
  h.classList.remove("nowa");
});


g.addEventListener('click', e => {
  h.classList.toggle("nowa");
  b.classList.remove("nowa");
  d.classList.remove("nowa");
  f.classList.remove("nowa");
});