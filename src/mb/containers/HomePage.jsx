import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../components/Home';
import actionCreators from '../actions/models-action-creators';

@connect(
  state => ({ models: state.models }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class HomePage extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({
      inTheaters: React.PropTypes.object,
      comingSoon: React.PropTypes.object
    }),
    loadComingSoon: React.PropTypes.func.isRequired,
    loadInTheaters: React.PropTypes.func.isRequired,
    loadTop250: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    models: { inTheaters: { count: 0 }, comingSoon: { count: 0 } }
  }

  render() {
    const loaders = {
      inTheaters: this.props.loadInTheaters,
      comingSoon: this.props.loadComingSoon,
      top250: this.props.loadTop250
    };
    return (
      <div className="mb-page mb-home-page">
        <Home models={this.props.models} loaders={loaders} />
      </div>
    );
  }
}
