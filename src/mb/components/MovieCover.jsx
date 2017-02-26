import React from 'react';
import { Link } from 'react-router';

export default function MovieCover(props) {
  return (
    <Link to={props.movie.id}>
      <div
        className="movie-cover"
        style={{ backgroundImage: `url(${props.movie.images.large})` }}
        alt="movie cover"
      />
    </Link>
  );
}

MovieCover.propTypes = {
  movie: React.PropTypes.shape({
    images: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired
  }).isRequired
};
