import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';
import TopicPage from './containers/TopicPage';

export default function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/movie/:movieId" component={MoviePage} />
      <Route path="/topic/:topic" component={TopicPage} />
    </Route>
  );
}
