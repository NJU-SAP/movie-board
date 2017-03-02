import React from 'react';

import RatingStars from './RatingStars';

export default class MovieDetailSpotlight extends React.Component {
  static propTypes = {
    movie: React.PropTypes.shape({
      trailers: React.PropTypes.array,
      title: React.PropTypes.string,
      year: React.PropTypes.string,
      countries: React.PropTypes.array,
      durations: React.PropTypes.array,
      rating: React.PropTypes.shape({
        average: React.PropTypes.number,
        stars: React.PropTypes.string
      })
    }).isRequired
  };

  static defaultProps = {
    movie: {
      trailers: null
    }
  };

  render() {
    const style = {
      backgroundImage: `-webkit-linear-gradient(left, rgba(0,0,0,1) 28%, rgba(20,20,20,0)), url('${this.props.movie.trailers[0].medium}')`,
      // backgroundImage: `-0-linear-gradient(left, rgba(0,0,0,1) 28%, rgba(20,20,20,0)), url('${this.props.movie.trailers[0].medium}')`,
      // backgroundImage: `linear-gradient(left, rgba(0,0,0,1) 28%, rgba(20,20,20,0)), url('${this.props.movie.trailers[0].medium}')`
    };
    return (
      <div className="movie-detail-spotlight" style={style}>
        <div className="title">{this.props.movie.title}</div>
        <div className="info">
          <span>{this.props.movie.year}</span>
          <span>{this.props.movie.countries[0]}</span>
          <span>{this.props.movie.durations[0]}</span>
        </div>
        <div className="rating">
          <RatingStars stars={this.props.movie.rating.stars} /> {this.props.movie.rating.average}
        </div>
      </div>
    );
  }
}
