var Room = require('./room');
var House = require('./house');

var r1 = new Room('living', 10, 12, 8, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 8, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 10, 'wood', 'orange');

console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2, r3);
console.log(h1, h2, h3);

console.log('the area of room 1 is', r1.area());

// loop through house 1 and print total area of the house
//
var house = h1;
var rm = 0;
var areaHouse = 0;
for (var i = 0; i < house.rooms.length; i++){
  areaHouse += house.rooms[i].area();
}
console.log('The total area of', house.name, 'is', areaHouse);
console.log('The cost of room 1 is $' + house.rooms[rm].cost());
console.log('The cost of room 2 is $' + house.rooms[rm+1].cost());
console.log('The cost of room 3 is $' + house.rooms[rm+2].cost());

// return area of house using prototype
console.log('The total area of', house.name, 'is', house.area());

// return the total cost of the house using prototype
console.log('The total cost of', house.name, 'is $' + house.cost());
