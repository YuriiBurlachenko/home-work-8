const delete_from_2_to_4_elements = 1;
const three_elemetns = 3;
const arr_num = prompt('введіть новий масив через пробіл');
console.log(arr_num);
const arr = arr_num.split(' ');
arr.length = prompt('введіть довжину масив');
console.log(arr);
let arr_sort = arr.sort(function (a, b) {
  return a - b;
});
console.log(arr_sort);
const removed = arr_sort.splice(delete_from_2_to_4_elements, three_elemetns);
console.log('видалені елементи');
console.log(removed);
console.log('результат після видаленя');
console.log(arr_sort);
