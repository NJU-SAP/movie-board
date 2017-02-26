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
    models: React.PropTypes.shape({}),
    loadComingSoon: React.PropTypes.func.isRequired,
    loadInTheaters: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    models: { inTheaters: { count: 0 }, comingSoon: { count: 0 } }
  }

  componentDidMount() {
    this.props.loadInTheaters();
    this.props.loadComingSoon();
  }

  render() {
    return (
      <div className="mb-page mb-home-page">
        <Home models={this.props.models} />
      </div>
    );
  }
}
