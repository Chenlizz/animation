import React, { Component } from 'react';
import './Card3.scss';

class Card3 extends Component {
  render() {
    return (
      <div class="card3Container">
        <div class="top">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="cardItem">
            <div class="card-front">
              <div class="number">
                <code>6214 ******** 3266</code>
              </div>
              <div class="due-date">
                Due 11/19
              </div>
            </div>
            <div class="card-back">
              <div class="bal">Balance</div>
              <div class="bal-value">
                <span>$</span>1999
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="graph">
            <ul class="legend">
              <li class="income">Income</li>
              <li class="expend">Expend</li>
            </ul>
          </div>
          <div class="drawer">
            <ul>
              <li>
                <span>Mar. 3</span>
                <span class="income">
                  Income
                </span>
                <span>Received $1000 in deposits</span>
              </li>
              <li>
                <span>Mar. 2</span>
                <span class="expend">
                  Expend
                </span>
                <span>Spending $19 on leisure</span>
              </li>
              <li>
                <span></span>
                <span class="expend">
                  Expend
                </span>
                <span>Spending $20 on the dinner</span>
              </li>
              <li>
                <span>Feb. 19</span>
                <span class="expend">
                  Expend
                </span>
                <span>Spending $46 on clothes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Card3;