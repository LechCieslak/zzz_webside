let a = document.querySelector('li1');
let b = document.querySelector('.oMnie');
//let C = document.querySelector('.metoda');

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
  b.classList.toggle("nowa");
});