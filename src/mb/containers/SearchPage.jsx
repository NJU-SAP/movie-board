import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../actions/search-action-creators';

@connect(
  (state, ownProps) => ({
    searchResult: state.search.searchResult,
    searchValue: ownProps.location.query.value
  }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)
export default class SearchPage extends React.Component {
  static propTypes = {
    searchResult: React.PropTypes.array,
    searchValue: React.PropTypes.string.isRequired,
    actions: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchResult: null,
    searchValue: '',
    actions: null,
  }

  render() {
    return (
      <SearchPage
        searchResult={this.props.searchResult}
        searchValue={this.props.searchValue}
        actions={this.props.actions}
      />
    );
  }
}
