import React from 'react';

import MovieDetailSpotlight from './MovieDetailSpotlight';
import MovieDetailInfo from './MovieDetailInfo';

export default class Movie extends React.Component {
  static propTypes = {
    movieId: React.PropTypes.string.isRequired,
    movie: React.PropTypes.object,
    actions: React.PropTypes.shape({
      loadMovie: React.PropTypes.func
    }).isRequired
  }

  static defaultProps = {
  }

  componentDidMount() {
    if (!this.props.movie) {
      this.props.actions.loadMovie(this.props.movieId);
    }
  }

  render() {
    if (!this.props.movie || !this.props.movie.photos) {
      return null;
    }
    return (
      <div className="mb-movie-detail">
        <MovieDetailSpotlight movie={this.props.movie} />
        <MovieDetailInfo movie={this.props.movie} />
      </div>
    );
  }
}
