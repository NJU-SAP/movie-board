import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Movie from '../components/Movie';

import actionCreators from '../actions/models-action-creators';

@connect(
  (state, ownProps) => ({
    movie: state.models.movies[ownProps.params.movieId],
    movieId: ownProps.params.movieId
  }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)
export default class MoviePage extends React.Component {
  static propTypes = {
    movieId: React.PropTypes.string.isRequired,
    movie: React.PropTypes.object,
    actions: React.PropTypes.shape({
      loadMovie: React.PropTypes.func
    }).isRequired
  }

  static defaultProps = {
  }

  render() {
    return (
      <div className="mb-movie">
        <Movie movie={this.props.movie} movieId={this.props.movieId} actions={this.props.actions} />
      </div>
    );
  }

}
