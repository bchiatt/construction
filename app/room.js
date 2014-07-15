'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function(){
    return this.length * this.width;
};

Room.prototype.walls = function(){
  return 2 * ((this.height * this.width) + (this.height * this.length));
};

Room.prototype.cost = function(){
  var rate, total = 0;
  switch (this.floor) {
    case 'carpet':
      rate = 15;
      break;
    case 'wood':
      rate = 10;
      break;
    case 'tile':
      rate = 12;
  }
  
  total += rate * this.area();
  total += this.walls() * 0.5;

  return total;
};

module.exports = Room;
