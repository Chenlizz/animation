import React, { Component } from 'react'
import Clock from './Clock';
import './WaitPage.scss';

class WaitPage extends Component {
  render() {
    return (
      <div className="waitPage">
        <Clock width="120" height="120" clockRadius="50" />
        <div className="text">
          <p>您已成功提交反馈</p>
          <p>请等待...</p>

          <div>返回首页</div>
        </div>


      </div>
    )
  }
}

export default WaitPage;