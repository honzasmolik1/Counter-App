'use strict';

const plus = document.querySelector('.plusbtn');
const minus = document.querySelector('.minusbtn');
const reset = document.querySelector('.resetbtn');

let num = document.querySelector('.number');
let number = 0;

plus.addEventListener(`click`, function () {
  // number = number + 1;
  number += 1;
  num.innerHTML = number;
});

minus.addEventListener(`click`, function () {
  number -= 1;
  num.textContent = number;
});

reset.addEventListener(`click`, function () {
  number = 0;
  num.textContent = number;
});
