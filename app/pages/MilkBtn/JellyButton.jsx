import React, { Component } from 'react';
import './_JellyButton.scss';

class JellyButton extends Component {
  render() {
    return (
      <div className="wrapperParent">
        <div className="wrapper">
          <div className="jellyButton">
            <div>J</div>
            <div>e</div>
            <div>l</div>
            <div>l</div>
            <div>y</div>
          </div>
        </div>
      </div>
    )
  }
}

export default JellyButton;