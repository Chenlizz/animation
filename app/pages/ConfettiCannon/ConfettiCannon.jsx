import React, { Component } from 'react';
import './confettiCannon.scss';

function getLength(x0, y0, x1, y1) {
  const x = x1 - x0;
  const y = y1 - y0;
  return Math.sqrt(x * x + y * y);
}

function getDegAngle(x0, y0, x1, y1) {
  const y = y1 - y0;
  const x = x1 - x0;
  return Math.atan2(y, x) * (180 / Math.PI);
}

function randomFn(a, b) {
  return (Math.random() * (b - a)) + a;
}

const SPREAD = 60;
class ConfettiCannon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
    };
  }

  componentDidMount() {
    this.pointer = {};
    this.dpr = 1;
    this.drawVector = false;
    this.vector = [{
      x: window.innerWidth,
      y: window.innerHeight * 1.25,
    }, {
      x: window.innerWidth,
      y: window.innerHeight * 2,
    }];
    this.confettiSprites = {};
    this.confettiSpriteIds = [];
    this.setCanvasSize();
    this.handleCanvas();
    window.addEventListener('mousedown', this.handleMousedown);
    window.addEventListener('mouseup', this.handleMouseup);
    window.addEventListener('mousemove', this.handleMousemove);
    window.addEventListener('touchstart', this.handleTouchstart);
    window.addEventListener('touchend', this.handleMouseup);
    window.addEventListener('touchmove', this.handleTouchmove);
    window.addEventListener('resize', this.setCanvasSize);
  }

  handleCanvas = () => {
    const canvas = document.querySelector('#canvas');
    if (canvas && canvas.getContext) {
      this.ctx = canvas.getContext('2d');
      this.ctx.clearRect(0, 0, this.state.width, this.state.height);
      this.drawVector && this.drawVectorLine();
      this.drawVector && this.drawFixedPointer();
      this.drawPointer();
      this.drawConfetti();
      requestAnimationFrame(this.handleCanvas);
    }
  }

  updateConfettiParticle = (id) => {
    const sprite = this.confettiSprites[id];
    const tiltAngle = 0.0005 * sprite.d;

    sprite.angle += 0.01;
    sprite.tiltAngle += tiltAngle;
    sprite.tiltAngle += sprite.tiltAngleIncremental;
    sprite.tilt = (Math.sin(sprite.tiltAngle - (sprite.r / 2))) * sprite.r * 2;
    sprite.y += Math.abs(Math.sin(sprite.angle + sprite.r / 2) * 2);
    sprite.x += sprite.direction * (Math.abs(Math.cos(sprite.angle) / 2 + sprite.velocity / 200));

    if (sprite.y > this.state.height || sprite.x > this.state.width) {
      this.confettiSprites[id] = {};  // 出界
    }
  }

  drawConfetti = () => {
    this.confettiSpriteIds.map((id, key) => {
      const sprite = this.confettiSprites[id];
      if (JSON.stringify(sprite) === '{}') {
        this.confettiSpriteIds.splice(key, 1); // 出界，删除
      }
      this.ctx.beginPath();
      this.ctx.lineWidth = sprite.d / 2; // 彩片宽
      this.ctx.strokeStyle = sprite.color;
      this.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
      this.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
      this.ctx.stroke();
      this.updateConfettiParticle(id);
    });
  }

  addConfettiParticles = (amount, twoPointAngle, lineVelocity, x, y, direction) => {
    let i = 0;
    while (i < amount) {
      // 角度
      const minAngle = twoPointAngle - SPREAD / 2;
      const maxAngle = twoPointAngle + SPREAD / 2;
      const angle = randomFn(minAngle, maxAngle);

      // 速度
      const minVelocity = lineVelocity / 4;
      const maxVelocity = lineVelocity;
      const velocity = randomFn(minVelocity, maxVelocity);

      const r = randomFn(4, 6) * this.dpr;
      const d = randomFn(15, 25) * this.dpr;
      const color = `rgb(${randomFn(30, 255)}, ${randomFn(30, 230)}, ${randomFn(30, 230)})`;
      const tilt = randomFn(10, -10); // 倾斜
      const tiltAngleIncremental = randomFn(0.07, 0.05); // 倾斜角度增量
      const tiltAngle = 0; // 倾斜角度


      const id = `${i}${r}${d}`;
      const sprite = {
        [id]: {
          angle,
          velocity,
          x,
          y,
          r,
          d,
          color,
          tilt,
          tiltAngleIncremental,
          tiltAngle,
          direction,
        },
      };
      Object.assign(this.confettiSprites, sprite);
      this.confettiSpriteIds.push(id);
      i++;
    }
  }

  // 线
  drawVectorLine = () => {
    this.ctx.strokeStyle = 'pink';
    this.ctx.lineWidth = 2 * this.dpr;
    const x0 = this.vector[0].x;
    const y0 = this.vector[0].y;
    const x1 = this.vector[1].x;
    const y1 = this.vector[1].y;
    this.ctx.beginPath();
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
  }

  // 移动圈
  drawPointer = () => {
    const centerX = this.pointer.x;
    const centerY = this.pointer.y;
    const radius = 15 * this.dpr;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = 2 * this.dpr;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
  }

  // 固定圈
  drawFixedPointer = () => {
    const x0 = this.vector[0].x;
    const y0 = this.vector[0].y;
    const x1 = this.vector[1].x;
    const y1 = this.vector[1].y;

    const length = getLength(x0, y0, x1, y1);
    const centerX = x0;
    const centerY = y0;
    const radius = 1 * this.dpr * length / 20;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = 2 * this.dpr;
    this.ctx.strokeStyle = '#333333';
    this.ctx.stroke();
  }

  handleMousedown = (event) => {
    const x = event.clientX * this.dpr;
    const y = event.clientY * this.dpr;

    this.vector[0] = { x, y };
    this.drawVector = true;
  }

  handleTouchstart = (event) => {
    event.preventDefault();
    const x = event.touches[0].clientX * this.dpr;
    const y = event.touches[0].clientY * this.dpr;
    this.vector[0] = { x, y };
    this.drawVector = true;
  }

  handleMouseup = () => {
    this.drawVector = false;

    const x0 = this.vector[0].x; // 起
    const y0 = this.vector[0].y;
    const x1 = this.vector[1].x; // 终
    const y1 = this.vector[1].y;
    const direction = x0 === x1 ? 1 : ((x0 - x1) / Math.abs(x0 - x1));
    const length = getLength(x0, y0, x1, y1); // 线长
    const angle = getDegAngle(x0, y0, x1, y1) + 180;

    const particles = length / 5 + 5; // 数量
    const velocity = length * 10; // 速度
    this.addConfettiParticles(particles, angle, velocity, x0, y0, direction);
  }

  handleMousemove = (event) => {
    const x = event.clientX * this.dpr;
    const y = event.clientY * this.dpr;
    this.vector[1] = { x, y };
    this.pointer = this.vector[1];
  }

  handleTouchmove = (event) => {
    event.preventDefault();
    const x = event.changedTouches[0].clientX * this.dpr;
    const y = event.changedTouches[0].clientY * this.dpr;
    this.vector[1] = { x, y };
    this.pointer = this.vector[1];
  }

  setCanvasSize = () => {
    this.setState({
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <div className="box">
        <canvas id="canvas" width={width} height={height} />
        <div className="text">
          <p>Confetti Cannon</p>
          <p>click, drag & release</p>
        </div>
      </div>
    );
  }
}

export default ConfettiCannon;