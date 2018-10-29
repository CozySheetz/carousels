import React, { Component } from 'react';
import $ from 'jquery';
import '../../lib/rating_styles.css';

class Rating extends Component {
  componentDidMount() {
    var color = this.props.color;
    var rating = this.props.rating;
    var floor = Math.floor(rating);
    var ceil = Math.ceil(rating);
    var middle = (floor + ceil) / 2;

    rating =
      rating <= middle
        ? rating - floor <= middle - rating
          ? floor
          : middle
        : rating - middle <= ceil - rating
          ? middle
          : ceil;

    var $stars = $(`#${this.props.roomId}`)[0].children;

    for (var i = 0; i < rating - 1; i++) {
      $($stars[i]).addClass(`${color}-star`);
    }

    if (rating !== Math.floor(rating))
      $($stars[Math.floor(rating)]).append(
        $(`<span class="half-${color}-star">&#x2605;</span>`)
      );
  }

  render() {
    return (
      <span className="mr-2" id={this.props.roomId}>
        {[1,2,3,4,5].map(() => <span className="star-o">
          &#x2605;
        </span>)}
      </span>
    );
  }
}

export default Rating;
