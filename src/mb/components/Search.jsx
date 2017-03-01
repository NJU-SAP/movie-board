import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';

export default class Search extends Component {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
  };

  static default = {
    className: null,
    placeholder: '',
  };

  state = {
    value: '',
  };

  _inputOnChange(e) {
    const value = e.currentTarget.value;
    this.setState({
      value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.length > 0) {
      browserHistory.push({
        pathname: '/search',
        search: `?value=${this.state.value}`
      });
    }
  }

  render() {
    return (<form onSubmit={(e) => { this._handleSubmit(e); }}>
      <input
        className="mb-header-search"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={(e) => { this._inputOnChange(e); }}
      /></form>);
  }
}
