import React from 'react';
import { Route, Switch } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';
import TopicPage from './containers/TopicPage';

export default function configRoutes() {
  // <IndexRoute component={HomePage} />
  return (
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/topic/:topic" component={TopicPage} />
        <Route path="/movie/:movieId" component={MoviePage} />
      </Switch>
    </App>
  );
}
