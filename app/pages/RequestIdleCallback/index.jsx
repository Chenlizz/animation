import React, { Component } from 'react';

// 一个红色的方块向右移动
class Ric extends Component {

  componentDidMount() {
    let left = 1;
    var element = document.getElementById("ricTarget")
    element.style.position = "absolute"

    function step() {
      left += 1;
      element.style.left = left + "px";
      // let i = 1000
      // while (i > 0) {
      //   console.log("i", i)
      //   i--
      // }
      if (left < 200) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)

    // 空闲调度
    requestIdleCallback(() => {
      // console.log('Ric');
      alert("Ric")
    }
      // , { timeout: 1000 } // 最迟执行时间
    );
  }

  render() {
    return (
      <div id="ricTarget" style={{ width: '100px', height: '100px', background: 'red', }} />
    )
  }
}

export default Ric;