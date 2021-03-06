import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../actions/models-action-creators';
import Topic from '../components/Topic';
import { capitalize } from '../util/word';

@connect(
  (state, ownProps) => ({
    model: state.models[ownProps.match.params.topic],
    topic: ownProps.match.params.topic
  }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)
export default class TopicPage extends React.Component {
  static propTypes = {
    topic: React.PropTypes.string.isRequired,
    model: React.PropTypes.object,
    actions: React.PropTypes.shape({
      loadComingSoon: React.PropTypes.func.isRequired,
      loadInTheaters: React.PropTypes.func.isRequired,
      loadTop250: React.PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { actions, topic, model } = this.props;
    const loadMore = () => actions[`load${capitalize(topic)}`]({
      count: 18,
      start: model.subjects.length
    });
    return (
      <Topic model={this.props.model} loadMore={loadMore} />
    );
  }
}
