import React, { Component, PropTypes } from 'react';
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

  constructor(props) {
    super(props);
    this.inputTimer = null;
  }

  state = {
    value: '',
  };

  _inputOnChange(e) {
    const value = e.currentTarget.value;
    if (this.inputTimer) {
      clearTimeout(this.inputTimer);
      this.inputTimer = null;
    }
    this.inputTimer = setTimeout(() => {
      this.setState({
        value
      });
    }, 300);
  }

  render() {
    return (<input
      className="mb-header-search"
      value={this.state.value}
      placeholder={this.props.placeholder}
      onChange={(e) => { this._inputOnChange(e); }}
    />);
  }
}
