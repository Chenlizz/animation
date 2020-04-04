import React, { Component } from 'react';
import commonTool from '../../utils/commonTool';

class GravityBall extends Component {
  componentDidMount() {
    const myCanvas = document.querySelector('#myCanvas');
    if (!myCanvas.getContext) return;
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    window.addEventListener('mousedown', () => {
      init();
    });
    window.addEventListener('resize', () => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
      init();
    });
    const ctx = myCanvas.getContext('2d');
    let ballArr;
    function init() {
      ballArr = [];
      for (let i = 0; i < 200; i++) {
        let radius = Math.random() * 15 + 5;
        let x = Math.random() * (myCanvas.width - 2 * radius) + radius;
        let y = Math.random() * (myCanvas.height - 2 * radius) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = Math.random() + 1;
        let color = commonTool.colorMap[Math.floor(Math.random() * 5)];
        ballArr.push(new Ball(x, y, radius, dx, dy, color));
      }
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (let b of ballArr) {
        b.update();
      }
    }
    init();
    animate();
    function Ball(x, y, radius, dx, dy, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = color;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      this.update = function () {
        if (this.y + this.radius + this.dy + 0.8 > myCanvas.height) {
          this.dy = -this.dy;
          this.dy += 0.9; // friction
          if (this.dx === 0) {
            return;
          } else if(this.dx > 0) {
            this.dx -= 0.1;
          } else {
            this.dx += 0.1;
          }
        } else {
          this.dy += 0.8; // Gravity
        }
        if (this.x + this.radius + this.dx + 0.1 >= myCanvas.width
          || this.x - this.radius - this.dx - 0.1 <= 0) {
          this.dx = -this.dx;
        }
        if (this.x + this.dx + this.radius < myCanvas.width
          && this.x - this.radius - this.dx >= 0) {
          this.x += this.dx;
        }
        if (this.y + this.dy + this.radius < myCanvas.height) {
          this.y += this.dy;
        }
        this.draw();
      }
    }
  }

  render() {
    return (
      <canvas id="myCanvas" />
    );
  }
}

export default GravityBall;