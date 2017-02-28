import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

export default class NavigationSlider extends Component {
  static propType = {
    open: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    open: null,
  };

  constructor(props) {
    super(props);
    this.tags = ['主页', '正在热映', '即将上映', 'TOP250'];
  }

  state = {
    selected: 0,
  }

  _createTagItem = (item, index) => {
    const classname = classnames('movie-tag', (this.state.selected === index ? 'selected' : ''));
    return (<li key={`navigation-slider-tag-${index}`} data-index={index} className={classname}>{item}</li>);
  }

  render() {
    const tags = this.tags.map(this._createTagItem);
    return (<div className={classnames('mb-navigation-slider', (this.props.open ? 'open' : ''))}>
      <ol className="navigation-user-list">
        <li className="user-info">username</li>
        <li className="user-info-link">您的账号</li>
        <li className="user-logout">登出 Netflix</li>
      </ol>
      <ol className="navigation-category-list">
        {tags}
      </ol>
    </div>);
  }
}
