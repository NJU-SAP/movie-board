import React from 'react';
import debounce from 'lodash/debounce';

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

  constructor(props) {
    super(props);
    this.handleScroll = debounce(this.handleScroll, 50);
  }

  componentDidMount() {
    if (!this.props.model.subjects.length) {
      this.props.loadMore();
    }
    this.mountPoint = document.getElementById('mbMountPoint');
    this.mountPoint.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.mountPoint.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const clientHeight = document.documentElement.clientHeight;
    const pageHeight = parseInt(getComputedStyle(this.refs.container).height);
    if (this.mountPoint.scrollTop + clientHeight > pageHeight - 200) {
      this.props.loadMore();
    }
    console.log(this.mountPoint.scrollTop, clientHeight, pageHeight);
  }

  render() {
    const covers = this.props.model.subjects
      .map(movie => <MovieCover key={movie.id} movie={movie} />);
    return (
      <div className="mb-page mb-topic" ref="container">
        <div className="mb-topic-section">
          <div className="list">
            {covers}
          </div>
        </div>
      </div>
    );
  }
}
