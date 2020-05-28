import React, { Component } from 'react';
import './style.scss';

class HeartAnimate extends Component {
  render() {
    return (
        <div className="heartAnimate">
          <input type="checkbox" id="toggle-heart" />
          <label for="toggle-heart">❤</label>

          <div className="svgHeart">
            <svg height="5" width="5" class="h h-1"><circle cx="50%" cy="50%" r="2" fill="#ffed80" /></svg>
            <svg height="5" width="5" class="h h-2"><circle cx="50%" cy="50%" r="2" fill="#a4ff80" /></svg>
            <svg height="5" width="5" class="h h-3"><circle cx="50%" cy="50%" r="2" fill="#80ffc8" /></svg>
            <svg height="5" width="5" class="h h-4"><circle cx="50%" cy="50%" r="2" fill="#80c8ff" /></svg>
            <svg height="5" width="5" class="h h-5"><circle cx="50%" cy="50%" r="2" fill="#a480ff" /></svg>
            <svg height="5" width="5" class="h h-6"><circle cx="50%" cy="50%" r="2" fill="#ff80ed" /></svg>
            <svg height="5" width="5" class="h h-7"><circle cx="50%" cy="50%" r="2" fill="#ff8080" /></svg>
            <svg height="5" width="5" class="h h-8"><circle cx="50%" cy="50%" r="2" fill="#ffed80" /></svg>
          </div>
        </div>
    );
  }
}

export default HeartAnimate;