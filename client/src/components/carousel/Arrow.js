import React, { Component } from 'react';

export default class Arrow extends Component {
  render() {
    const {onClick, direction } = this.props;

    const arrowStyle = {
      display: `block`,
      height: `24px`,
      width: `24px`,
      transform: `translatey(-250%)`,
      fill: `rgb(118, 118, 118)`,
    };

    return (
      onClick ? 
      <svg
        viewBox="0 0 18 18"
        role="img"
        aria-label={direction === '+' ? 'Next' : 'prev'}
        focusable="false"
        style={arrowStyle}
        className={`slick-${direction === '+' ? 'next' : 'prev'} float-${direction === '+' ? 'right' : 'left'}`}
        onClick={(props) => {
          onClick(props);
        }}
      >
        <path
          d={`${direction === '+' ? "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" : "m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"}`}
          fillRule="evenodd"
        />
      </svg>
      :
      ""
    );
  }
}
