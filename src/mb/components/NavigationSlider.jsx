import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavigationSlider extends Component {
  static propTypes = {
    selected: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  static defaultProps = {
    selected: '',
    topics: ['', 'inTheaters', 'commingSoon', 'top250']
  };

  handleTopicClick = () => {
    this.props.toggle();
  }

  renderTopicItem = (Topic, index) => {
    const classname = classnames('movie-tag', { selected: this.props.selected === Topic });
    return (
      <li  // eslint-disable-line jsx-a11y/no-static-element-interactions
        key={`navigation-slider-tag-${index}`}
        data-index={index}
        className={classname}
        onClick={this.handleTopicClick}
      >
        <Link>{Topic}</Link>
      </li>
    );
  };

  render() {
    const tags = this.props.topics.map(this.renderTopicItem);
    return (
      <div className={classnames('mb-navigation-slider', { open: this.props.open })}>
        <ol className="navigation-user-list">
          <li className="user-info">username</li>
          <li className="user-info-link">您的账号</li>
          <li className="user-logout">登出 Netflix</li>
        </ol>
        <ol className="navigation-category-list">
          {tags}
        </ol>
      </div>
    );
  }
}
