import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import topicNames from '../constants/topics';

export default class NavigationSlider extends Component {
  static propTypes = {
    selected: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  static defaultProps = {
    selected: '',
    topics: ['', 'inTheaters', 'comingSoon', 'top250']
  };

  handleTopicClick = () => {
    this.props.toggle();
  }

  renderTopicItem = (topic, index) => {
    const classname = classnames('movie-tag', { selected: this.props.selected === topic });
    const href = topic ? `topic/${topic}` : '/';
    return (
      <li
        key={`navigation-slider-tag-${index}`}
        data-index={index}
        className={classname}
        onClick={this.handleTopicClick}
      >
        <Link to={href}>
          {topicNames[topic]}
        </Link>
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
