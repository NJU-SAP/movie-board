import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../components/Home';
import actionCreators from '../actions/models-action-creators';

@connect(
  state => ({ models: state.models }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)
export default class HomePage extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({
      inTheaters: React.PropTypes.object,
      comingSoon: React.PropTypes.object
    }),
    actions: React.PropTypes.shape({
      loadComingSoon: React.PropTypes.func.isRequired,
      loadInTheaters: React.PropTypes.func.isRequired,
      loadTop250: React.PropTypes.func.isRequired
    })
  }

  render() {
    const { actions } = this.props;
    const offset = {
      start: 0,
      count: 18
    };
    const loaders = {
      inTheaters: () => actions.loadInTheaters(offset),
      comingSoon: () => actions.loadComingSoon(offset),
      top250: () => actions.loadTop250(offset)
    };
    return (
      <div className="mb-page mb-home-page">
        <Home models={this.props.models} loaders={loaders} />
      </div>
    );
  }
}
