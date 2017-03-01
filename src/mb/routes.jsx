import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';

export function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/:movieId" component={MoviePage} />
    </Route>
  );
}
