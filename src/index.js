import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var numbers = [3, 56, 2, 48, 5];
const example=numbers.map((x)=>{
  return (x*x);
});
console.log(example);
////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x=> x * 2);
console.log(newNumbers);
//////Filter - Create a new array by keeping the items that return true.
const lessThanTen = numbers.filter(num=> num < 10);
console.log(lessThanTen);

//Reduce - Accumulate a value by doing something to each item in an array.
var sum = numbers.reduce( (accumulator, currentNumber) =>
     accumulator + currentNumber
);
console.log(sum);

////Find - find the first item that matches from an array.
const greaterThanTen = numbers.find(num=>num > 10);
console.log(greaterThanTen);
////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
