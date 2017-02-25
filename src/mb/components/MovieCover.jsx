import React from 'react';

export default function MovieCover(props) {
  return (
    <div
      className="movie-cover"
      style={{ backgroundImage: `url(${props.movie.images.large})` }}
      alt="movie cover"
    />
  );
}

MovieCover.propTypes = {
  movie: React.PropTypes.shape({
    images: React.PropTypes.object.isRequired
  }).isRequired
};
