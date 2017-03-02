import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../actions/models-action-creators';

@connect(
  state => ({ models: state.models }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class MoviePage extends React.Component {
  static propTypes = {
    loadMovie: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      movieId: React.PropTypes.string.isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.loadMovie(this.props.params.movieId);
  }

  render() {
    return (
      <div>
        <h1>Movie selected, {this.props.params.movieId}</h1>
      </div>
    );
  }
}
