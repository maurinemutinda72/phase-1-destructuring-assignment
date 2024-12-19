// Provided Data
const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const vegetables = {
  root: 'carrot',
  leafy: 'spinach',
  allium: 'onion',
};
const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats: {
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses: {
      american: 'kraft',
    },
  },
};

// Instructions

// 1. Destructure `farmAnimals` string into individual variables
const [cow, horse, sheep, pig, chicken] = farmAnimals.split(' ');
console.log(cow, horse, sheep, pig, chicken);

// 2. Destructure first three colors and the rest into another variable
const [primary1, primary2, primary3, ...otherColors] = colors;
console.log(primary1, primary2, primary3, otherColors);

// 3. Destructure vegetables object into individual variables
const { root, leafy, allium } = vegetables;
console.log(root, leafy, allium);

// 4. Destructure `doggie` object to extract its name, breed, and furColor
const { name, breed, furColor } = doggie;
console.log(name, breed, furColor);

// 5. Destructure `doggie.favoriteFoods.meats` to extract ham and hotDog
const { ham, hotDog } = doggie.favoriteFoods.meats;
console.log(ham, hotDog);

// 6. Destructure only title and lastName from `dogsName` string
const dogsName = 'Sir Woody BarksALot';
const [title, , lastName] = dogsName.split(' ');
console.log(title, lastName);
