import React, { Component } from 'react';
import './style.scss';

class DownLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    if (!this.state.active) {
      this.setState({
        active: true
      });
    }
  }

  render() {
    const { active } = this.state;
    return (
      <div className="downLoadAn">
        <div className="downLoad" onClick={this.handleClick}>
          <p>Download</p>
          <div className="circle">
            <span class="iconfont icon-duanjiantouyou-copy-copy"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default DownLoad;