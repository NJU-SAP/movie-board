import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCover(props) {
  return (
    <li>
      <Link to={`/movie/${props.movie.id}`}>
        <div
          className="movie-cover"
          style={{ backgroundImage: `url(${props.movie.images.large})` }}
          alt="movie cover"
        />
      </Link>
    </li>
  );
}

MovieCover.propTypes = {
  movie: React.PropTypes.shape({
    images: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired
  }).isRequired
};
