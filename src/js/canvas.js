'use strict';
import utils from './utils';
import Circle from './circle';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerHeight / 2;
canvas.height = innerHeight / 2;

// stores object for canvas
let circles;
function init() {
  circles = []
  
  const radius = 10;
  // values of x and y are specify like this to ensure non of them spawn in canvas border
  let x = utils.randomIntFromRange(radius, canvas.width - radius);
  let y = utils.randomIntFromRange(radius, canvas.height - radius);

  circles.push(new Circle(c, x, y, radius, "red"));

  for (let i = 0; i < 30; i++) {

    x = utils.randomIntFromRange(radius, canvas.width - radius);
    y = utils.randomIntFromRange(radius, canvas.height - radius);
    
    if (i!=0) {
      for (let j = 0; j < circles.length; j++) {
        // to avoid spawning object inside one of other circles
        if (utils.getDistance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
          x = utils.randomIntFromRange(radius, canvas.width - radius);
          y = utils.randomIntFromRange(radius, canvas.height - radius); 
          j = -1;
        }
      }
    }
    
    circles.push(new Circle(c, x, y, radius, "blue"));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  
  circles.forEach(object => {
    object.update(circles)
  });
}

init()
animate()