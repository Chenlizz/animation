import React, { Component } from 'react';
import CommonTool from '../../utils/commonTool';
import './style.scss';

class AnimateBall extends Component {
  componentDidMount() {
    const myCanvas = document.querySelector('#myCanvas1');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    let mouse = {};
    window.addEventListener('mousemove', event => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
    window.addEventListener('resize', event => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
    });
    if (!myCanvas.getContext) return;
    const ctx = myCanvas.getContext('2d');
    const BallArr = [];
    for (let i = 0; i < 400; i++) {
      let radius = Math.random() * 4 + 1;
      let x = Math.random() * (myCanvas.width - 2 * radius) + radius;
      let y = Math.random() * (myCanvas.height - 2 * radius) + radius;
      let dx = (Math.random() - 0.5) * 2;
      let dy = (Math.random() - 0.5) * 2;
      let color = CommonTool.colorMap[Math.floor(Math.random() * 5)];
      BallArr.push(new Ball(x, y, radius, dx, dy, color));
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (let b of BallArr) {
        b.update();
      }
    }
    animate();
    function Ball(x, y, radius, dx, dy, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.maxRadius = 30;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // 创建圆形
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      this.update = function () {
        if (this.x + this.radius > myCanvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > myCanvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
          && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < this.maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > radius) {
          this.radius -= 1;
        }

        this.draw();
      }
    }
  }

  render() {
    return (
      <canvas id="myCanvas1" />
    );
  }
}

export default AnimateBall;