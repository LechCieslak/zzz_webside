let a = document.querySelector('li');
let b = document.querySelector('.oMnie');
//let C = document.querySelector('.metoda');

a.addEventListener('click', e => {
  b.classList.toggle("nowa");
  d.classList.remove("");
});

// a.addEventListener('click', e => {
//   c.classList.toggle("nowa");
// });


let c = document.querySelector('.uj2');
let d = document.querySelector('.metoda');
//let C = document.querySelector('.metoda');

c.addEventListener('click', e => {
  d.classList.toggle("nowa");
});