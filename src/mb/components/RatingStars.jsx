import React from 'react';

import Icon from './Icon';

export default function RatingStars(props) {
  const stars = props.stars;
  const starsElement = [];
  for (let i = 0; i < 50; i += 10) {
    if (stars - i >= 10) {
      starsElement.push(<Icon iconName="star" className="star" key={i} />);
    } else if (stars - i === 5) {
      starsElement.push(<div className="icon octicon half-star" key={i}></div>);
    } else {
      starsElement.push(<Icon iconName="star" className="zero-star" key={i} />);
    }
  }
  return (
    <span className="rating-stars">
      {starsElement}
      <span className="average">{props.average}</span>
    </span>
  );
}

RatingStars.propTypes = {
  average: React.PropTypes.number.isRequired,
  stars: React.PropTypes.string.isRequired
};
