import React from 'react';
import classnames from 'classnames';

import SectionHeader from './SectionHeader';

export default class MovieDetailInfo extends React.Component {
  static propTypes = {
    movie: React.PropTypes.shape({
      summary: React.PropTypes.string,
      directors: React.PropTypes.array,
      casts: React.PropTypes.array,
      genres: React.PropTypes.array,
    }).isRequired,
  };

  static defaultProps = {
  };

  state = {
    hidden: true
  }

  handleToggleButtonClick = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  createDirectors() {
    return (
      <div className="directors">
        <div>导演</div>
        <ol className="details-list">
          {this.props.movie.directors.map((actor, i) => {
            return <li key={i}>{actor.name}</li>
          })}
        </ol>
      </div>
    );
  }

  createActors() {
    return (
      <div className="actors">
        <div className>演员</div>
        <ol className="details-list">
          {this.props.movie.casts.map((cast, i) => {
            return <li key={i}>{cast.name}</li>
          })}
        </ol>
      </div>
    );
  }

  createTypes() {
    return (
      <div className="types">
        <div>类型</div>
        <ol className="details-list">
          {this.props.movie.genres.map((genre, i) => {
            return <li key={i}>{genre}</li>
          })}
        </ol>
      </div>
    );
  }

  render() {
    const introClassNames = classnames({
      'movie-detail-intro': true,
      'opened': !this.state.hidden,
      'closed': this.state.hidden
    });
    return (
      <div className="movie-detail-info">
        <div
          className={introClassNames}
          onClick={this.handleToggleButtonClick}
          ref={ref => (this.intro = ref)}
        >{this.props.movie.summary}
        </div>
        <SectionHeader title="影片资讯" />
        <div className="movie-detail-infos">
          {this.createDirectors()}
          {this.createActors()}
          {this.createTypes()}
        </div>
      </div>
    );
  }
}
