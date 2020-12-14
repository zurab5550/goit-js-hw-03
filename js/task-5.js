const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop){
  let result = [];
  for(const product of arr){
    if(product[prop]){
      result.push(product[prop]);
    }
  }
  return result;
}

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []



// Task solution I need to find out



// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
//   const getAllPropValues = function(arr, prop){
//   const values = [];

// for (let i = 0; i < arr.length; i += 1) {

// const arrays = Object.entries(arr[i]);
// for(const array of arrays){
// const key = array[0];
// const value = array[1];
// if (key === prop) {
// values.push(value);
// }
// }
// }
// return values
// }


// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []


