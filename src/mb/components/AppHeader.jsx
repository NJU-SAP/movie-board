import cn from 'classnames';
import React from 'react';
import { Route } from 'react-router';

import Icon from './Icon';
import NavigationSlider from './NavigationSlider';
import Search from './Search';

export default class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      translucent: false,
      open: false,
    };
  }

  componentDidMount() {
    // TODO: Remove scroll listener when componentDidUnmount if necessary.
    $(window).on('scroll', () => {
      const translucent = document.body.scrollTop > 5;
      if (this.state.translucent !== translucent) {
        this.setState({
          translucent
        });
      }
    });
  }

  handleNavigationSliderToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleNavigationSliderHide = () => {
    this.setState({
      open: false
    });
  }

  render() {
    const className = cn('mb-app-header', { translucent: this.state.translucent });

    return (
      <header className={className}>
        <div className="header-left">
          <div className="header-icons">
            <Icon
              className="nav-show-btn"
              iconName="three-bars"
              onClick={this.handleNavigationSliderToggle}
            />
            <div className="mb-logo" />
          </div>
          <div
            className={cn('background', { active: this.state.open })}
            onClick={() => this.handleNavigationSliderHide()}
          />
          <Route path="*" render={(props) => <NavigationSlider {...props} open={this.state.open} toggle={this.handleNavigationSliderToggle} />} />
        </div>
        <Search className="mb-header-search" placeholder="搜索" />
      </header>
    );
  }
}
