//  for .. in

// for of

const arr = ['apple', 'ball', 'cat', 'dog'];

const newarr = arr.map((item) => {
  if (item === 'apple') {
    return 'orange';
  } else return arr === null;
});

console.log('arr : ', arr);
console.log('newarr : ', newarr);

// filter

const filterArr = arr.filter((item) => {
  return item !== 'ball';
});

console.log('filtered : ', filterArr);

// slice

const slicedArr = arr.slice(1, 3);

console.log('slicedArry : ', slicedArr);

// splice

const splicedArr = arr.splice(1, 3);

console.log('splicedArr : ', splicedArr);
