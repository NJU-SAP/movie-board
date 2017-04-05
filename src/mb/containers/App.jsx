import React from 'react';
import { Switch, Route } from 'react-router';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  // 在'/topic/*'路径下不显示Footer
  render() {
    return (
      <div className="mb-app">
        <Route path="*" component={AppHeader} />
        {this.props.children}
        <Switch>
          <Route exact path="/" component={AppFooter} />
          <Route path="/movie" component={AppFooter} />
        </Switch>
      </div>
    );
  }
}
