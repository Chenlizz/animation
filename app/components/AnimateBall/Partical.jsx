import React, { Component } from 'react';
import commonTool from '../../utils/commonTool';
import { getDistance, randomIntFromRange, randomFloatFromRange, resolveCollision } from './tool';

class Partical extends Component {
  componentDidMount() {
    const myCanvas = document.querySelector('#myCanvas3');
    if (!myCanvas.getContext) return;
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    // window.addEventListener('mousedown', () => {
    //   init();
    // });
    window.addEventListener('resize', () => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
      init();
    });
    const ctx = myCanvas.getContext('2d');

    function Ball(x, y, radius, dx, dy, color, mass) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.mass = mass;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      this.update = function (balls) {
        // 碰撞检测
        for (let b of balls) {
          if (this === b) continue;
          // 发生碰撞
          if (getDistance(this.x, this.y, b.x, b.y) <= this.radius + b.radius) {
            let xVelDiff = b.dx - this.dx;
            let yVelDiff = b.dy - this.dy;
            let xDist = b.x - this.x;
            let yDist = b.y - this.y;
            if (xVelDiff * xDist + yVelDiff * yDist < 0) {
              resolveCollision(this, b);
            }
          }
        }

        if (this.x + this.radius + this.dx > myCanvas.width || this.x - this.radius + this.dx < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius + this.dy > myCanvas.height || this.y - this.radius + this.dy < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    let ballArr;
    function init() {
      ballArr = [];
      for (let i = 0; i < 50; i++) {
        let radius = randomIntFromRange(15, 20);
        let x = randomIntFromRange(radius, myCanvas.width - radius);
        let y = randomIntFromRange(radius, myCanvas.height - radius);
        for (let j = 0; j < ballArr.length; j++) {
          if (getDistance(x, y, ballArr[j].x, ballArr[j].y) <= radius + ballArr[j].radius) {
            radius = randomIntFromRange(15, 20);
            x = randomIntFromRange(radius, myCanvas.width - radius);
            y = randomIntFromRange(radius, myCanvas.height - radius);
            j = -1;
          }
        }
        let mass = radius * 0.5;
        let dx = randomFloatFromRange(-1, 1);
        let dy = randomFloatFromRange(-1, 1);
        let color = commonTool.colorMap[Math.floor(Math.random() * 5)];
        ballArr.push(new Ball(x, y, radius, dx, dy, color, mass));
      }
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (let b of ballArr) {
        b.update(ballArr);
      }
    }
    init();
    animate();
  }

  render() {
    return (
      <canvas id="myCanvas3" />
    );
  }
}

export default Partical;