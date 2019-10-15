// const square = function(x) {
//   return x * x;
// };

// // const squareArrow = (x) => {
// //   return x * x;
// // };


// const squareArrow = (x) => x * x;


// console.log(square(8));

// console.log(squareArrow(12));


const getFirstName = function(fullName) {
  return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => {
  return fullName.split(' ')[0];
}

const getFirstNameArrowShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Jane Doe'));
console.log(getFirstNameArrow('John Doe'));
console.log(getFirstNameArrowShort('Sally Sue'));