import React from 'react';
import { Link } from 'react-router-dom';

import RatingStars from './RatingStars';

class MovieCover extends React.Component {
  static propTypes = {
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

  state = {
    loaded: false
  };

  handleImageLoad = () => {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { movie } = this.props;
    const style = {
      backgroundImage: `url(${movie.images.medium})`
    };
    return (
      <li className="movie-cover">
        <Link to={`/movie/${movie.id}`}>
          <div
            className="image"
            style={this.state.loaded ? style : null}
            alt="movie cover"
          />
          <img
            src={`${movie.images.medium}`}
            className="hidden-image"
            style={{ display: 'none' }}
            onLoad={this.handleImageLoad}
          />
          <div className="title">
            {movie.title}
          </div>
          <div className="rating">
            <RatingStars
              stars={movie.rating.stars}
              average={movie.rating.average}
            />
          </div>
        </Link>
      </li>
    );
  }
}

export default MovieCover;
