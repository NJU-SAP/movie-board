import React from 'react';

import SectionHeader from './SectionHeader';
import MovieCover from './MovieCover';
import topicNames from '../constants/topics';

export default class HomeRow extends React.Component {
  static propTypes = {
    loader: React.PropTypes.func.isRequired,
    model: React.PropTypes.shape({
      count: React.PropTypes.isRequired,
      subjects: React.PropTypes.array,
      title: React.PropTypes.string
    }),
    topic: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    model: {
      subjects: []
    }
  };

  componentDidMount() {
    if (!this.props.model.title) {
      this.props.loader();
    }
  }

  renderSectionContent() {
    const covers = this.props.model.subjects
      .slice(0, 20)
      .map(movie => <MovieCover key={movie.id} movie={movie} />);
    return (
      <div className="section-content">
        <div className="movie-covers">
          {covers}
        </div>
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
