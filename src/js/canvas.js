import utils from './utils';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerHeight / 2;
canvas.height = innerHeight / 2;

// addEventListener('resize', () => {
//   canvas.width = innerWidth / 2;
//   canvas.height = innerHeight / 2;

//   init();
// });
// const mouse = {
//   x: innerWidth / 2,
//   y: innerHeight / 2
// }

// Event Listeners
// addEventListener('mousemove', (event) => {
//   mouse.x = event.clientX
//   mouse.y = event.clientY
// })



// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() * 5 - 2.5,
      y: Math.random() * 5 - 2.5
    };
    this.radius = radius;
    this.color = color;
  }
  
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
  
  update() {
    this.draw();
    
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    
    for (let i = 0; i < objects.length; i++) {
      if (this === objects[i]) continue;

      if (utils.getDistance(this.x , this.y, objects[i].x, objects[i].y) - 2 * this.radius < 0) {
        // console.log("hit")
        // consider adding bounce effect
        this.color = "red";
      }
    }


    // detect canvas hit
    if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
      this.velocity.x = -this.velocity.x;
    }
    
    if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
      this.velocity.y = -this.velocity.y;
    }
  }
}

// Implementation
let objects;
function init() {
  objects = []
  
  for (let i = 0; i < 30; i++) {
    const radius = 10;
    // values of x and y are specify like this to ensure non of them spawn in canvas border
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(radius, canvas.height - radius);

    if (i!=0) {
      for (let j = 0; j < objects.length; j++) {
        // to avoid spawning object inside one of other objects
        if (utils.getDistance(x, y, objects[j].x, objects[j].y) - radius * 2 < 0) {
          x = utils.randomIntFromRange(radius, canvas.width - radius);
          y = utils.randomIntFromRange(radius, canvas.height - radius); 
          j = -1;
        }
      }
    }
    
    objects.push(new Object(x, y, radius, "blue"));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  
  // c.fillText('HTML  BOILERPLATE', mouse.x, mouse.y)
  objects.forEach(object => {
    object.update()
  })
}

init()
animate()

// window.setInterval(() => {
//   objects.forEach((object) => {
//     object.velocity.x = Math.random() * 5 - 2.5;
//     object.velocity.y = Math.random() * 5 - 2.5;
//   });
// }, 3000);