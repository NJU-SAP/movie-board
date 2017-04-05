import React from 'react';
import { Link } from 'react-router-dom';

import RatingStars from './RatingStars';

export default function MovieCover(props) {
  return (
    <li className="movie-cover">
      <Link to={`/movie/${props.movie.id}`}>
        <div
          className="image"
          style={{ backgroundImage: `url(${props.movie.images.medium})` }}
          alt="movie cover"
        />
        <div className="title">
          {props.movie.title}
        </div>
        <div className="rating">
          <RatingStars stars={props.movie.rating.stars} average={props.movie.rating.average} />
        </div>
      </Link>
    </li>
  );
}

MovieCover.propTypes = {
  movie: React.PropTypes.shape({
    images: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    rating: React.PropTypes.shape({
      average: React.PropTypes.number,
      stars: React.PropTypes.string
    })
  }).isRequired
};
