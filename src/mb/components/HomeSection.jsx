import React from 'react';

import SectionHeader from './SectionHeader';
import MovieCover from './MovieCover';
import topicNames from '../constants/topics';

export default class HomeRow extends React.Component {
  static propTypes = {
    loader: React.PropTypes.func.isRequired,
    model: React.PropTypes.shape({
      subjects: React.PropTypes.array,
    }),
    topic: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    model: {
      subjects: []
    }
  };

  componentDidMount() {
    if (!this.props.model.subjects.length) {
      this.props.loader();
    }
  }

  renderSectionContent() {
    const covers = this.props.model.subjects
      .slice(0, 10)
      .map(movie => <MovieCover key={movie.id} movie={movie} />);
    return (
      <div className="section-content">
        <ul className="movie-covers">
          {covers}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="mb-home-section">
        <SectionHeader title={topicNames[this.props.topic]} />
        {this.renderSectionContent()}
      </div>
    );
  }
}
