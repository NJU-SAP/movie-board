import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

import asyncComponent from './components/asyncComopnent';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';

const TopicPage = asyncComponent(
  () => import('./containers/TopicPage').then(module => module.default)
);

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/topic/:topic" component={TopicPage} />
        </Switch>
      </App>
    </Provider>
  );
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};
