import React from 'react';

import MovieCover from './MovieCover';

export default class Topic extends React.Component {
  static propTypes = {
    model: React.PropTypes.shape({
      subjects: React.PropTypes.array
    }),
    loadMore: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    model: {
      subjects: []
    }
  };

  componentDidMount() {
    if (!this.props.model.subjects.length) {
      this.props.loadMore();
    }
  }

  render() {
    const covers = this.props.model.subjects
      .map(movie => <MovieCover key={movie.id} movie={movie} />);
    return (
      <div className="mb-page mb-topic">
        <div className="mb-topic-section">
          <div className="list">
            {covers}
          </div>
        </div>
      </div>
    );
  }
}
