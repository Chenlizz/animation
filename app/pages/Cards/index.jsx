import React, { Component } from 'react';
import Card from './Card';
import CardUI from './Card3';
import Wallet from './Wallet';
import './_index.scss';

class index extends Component {
  render() {
    return (
      <div>
        <Card />
        <div className="CardUIBox">
          <CardUI />
        </div>
        <div className="walletBox">
          <Wallet />
        </div>
      </div>
    );
  }
}

export default index;