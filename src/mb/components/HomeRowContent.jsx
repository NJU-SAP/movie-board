import React from 'react';

import MovieCover from './MovieCover';

export default function HomeRowContent(props) {
  const covers = props.movies
    .slice(0, 20)
    .map(movie => <MovieCover key={movie.id} movie={movie} />);
  return (
    <div className="mb-home-row-content">
      <div className="movie-covers">
        {covers}
      </div>
    </div>
  );
}

HomeRowContent.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object)
};

HomeRowContent.defaultProps = {
  movies: []
};
