import React from 'react';

export default function MoviePage(props) {
  return (
    <div>
      <h1>Movie selected, {props.params.movieId}</h1>
    </div>
  );
}

MoviePage.propTypes = {
  params: React.PropTypes.shape({
    movieId: React.PropTypes.string.isRequired
  }).isRequired
};
