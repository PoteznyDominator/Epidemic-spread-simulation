'use strict'

import utils from './utils';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

class Circle {
  constructor(context, x, y, radius, color) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() * 5 - 2.5,
      y: Math.random() * 5 - 2.5
    };
    this.radius = radius;
    this.color = color;
  }
  update(circles) {
    this.draw();
    
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    
    for (let i = 0; i < circles.length; i++) {
      if (this === circles[i]) continue;

      if (utils.getDistance(this.x , this.y, circles[i].x, circles[i].y) - 2 * this.radius < 0 && circles[i].color == "red") {
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

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

export default Circle;