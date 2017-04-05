import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';

export default class Search extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
  };

  static default = {
    placeholder: '',
  };

  state = {
    value: '',
  };

  handleInputChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.length > 0) {
      browserHistory.push({
        pathname: '/search',
        search: `?value=${this.state.value}`
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="mb-header-search"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}
