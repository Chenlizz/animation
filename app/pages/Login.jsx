import React, { Component } from 'react';
import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: false
    }
  }

  add = () => {
    this.setState({
      add: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          add: false,
        })
      }, 5000)
    })
  }

  render() {
    const { add } = this.state;
    return (
      <div className="login">
        <button onClick={this.add}>add</button>
        <div className={add ? 'temp run_top_right' : 'temp'}>
        </div>
      </div>
    );
  }
}

export default Login;