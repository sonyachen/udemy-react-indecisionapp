// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound with arrow functions
const user = {
  name: 'Sonya',
  cities: ['Boston', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());


const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());