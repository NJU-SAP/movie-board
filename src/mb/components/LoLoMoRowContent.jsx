import React from 'react';

export default function LoLoMoRowContent(props) {
  const images = props.movies.map(movie => {
    return <img className="movie-cover" key={movie.id} src={movie.images.medium} alt="movie cover" />;
  });
  return (
    <div className="mb-lolomo-row-content">
      {images}
    </div>
  );
}

LoLoMoRowContent.propTypes = {
  moview: React.PropTypes.array.isRequired
};
