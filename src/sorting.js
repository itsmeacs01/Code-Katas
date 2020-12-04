/*

Question: Sort the array according to the "content of the elements".

Problems: 
    Question No. 01 : sortArray([4, 1, 3]) ➞ [1, 3, 4]

    Question No. 02 : sortArray([[4], [1], [3]]) ➞ [[1], [3], [4]]
    
    Question No. 03 : sortArray([4, [1], 3]) ➞ [[1], 3, 4]
    
    Question No. 04 : sortArray([[4], 1, [3]]) ➞ [1, [3], [4]]
    
    Question No. 05 : sortArray([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

*/

// code here :

function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log('Answer No. 01: ', sortArray([4, 1, 3]));
console.log('Answer No. 02: ', sortArray([[4], [1], [3]]));
console.log('Answer No. 03: ', sortArray([4, [1], 3]));
console.log('Answer No. 04: ', sortArray([[4], 1, [3]]));
console.log('Answer No. 05: ', sortArray([[3], 4, [2], [5], 1, 6]));
