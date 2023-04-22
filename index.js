const DELETE_FROM_2_TO_4_ELEMENTS = 1;
const THREE_ELEMENTS = 3;

const arrNum = prompt('введіть новий масив через пробіл');

console.log(arrNum);

const arr = arrNum.split(' ');

arr.length = prompt('введіть довжину масив');
console.log(arr);

let arrSort = arr.sort(function (a, b) {
  return a - b;
});

console.log(arrSort);
const removed = arrSort.splice(DELETE_FROM_2_TO_4_ELEMENTS, THREE_ELEMENTS);

console.log('видалені елементи');
console.log(removed);
console.log('результат після видаленя');
console.log(arrSort);
