import React from 'react';

import '../res/rating-stars.less';
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
    <div className="mb-rating-stars">
      {starsElement}
    </div>
  );
}

RatingStars.propTypes = {
  stars: React.PropTypes.string.isRequired
};
