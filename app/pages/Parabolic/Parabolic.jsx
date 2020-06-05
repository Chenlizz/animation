import React, { Component } from 'react';
import './style.scss';

function generateCubicBezier(v, g, t) {
  var a = v / g;
  var b = t + v / g;

  return [[(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)],
  [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]];
}

class Parabolic extends Component {
  createBall = () => {
    var ball = document.createElement("div");
    var t = Number(document.getElementById("t").value);
    var vx = Number(document.getElementById("vx").value);
    var vy = Number(document.getElementById("vy").value);
    var g = Number(document.getElementById("g").value);
    ball.className = "ball";
    document.querySelector('.parabolic').appendChild(ball);
    ball.style.transition = `left linear ${t}s, top cubic-bezier(${generateCubicBezier(vy, g, t)}) ${t}s`;
    setTimeout(function () {
      ball.style.left = `${vx * t}px`;
      ball.style.top = `${vy * t + 0.5 * g * t * t}px`;
    }, 100);
    setTimeout(function () { document.querySelector('.parabolic').removeChild(ball); }, t * 1000);
  }

  render() {
    return (
      <div className="parabolic">
        <label><p>运动时间：</p><input defaultValue="3.6" type="number" id="t" /> s</label><br />
        <label><p>初速度：</p><input defaultValue="-21" type="number" id="vy" /> px/s</label><br />
        <label><p>水平速度：</p><input defaultValue="21" type="number" id="vx" /> px/s</label><br />
        <label><p>重力：</p><input defaultValue="10" type="number" id="g" /> px/s²</label><br />
        <div onClick={this.createBall}>来一个球</div>
      </div>
    );
  }
}

export default Parabolic;