import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';
import TopicPage from './containers/TopicPage';

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/topic/:topic" component={TopicPage} />
            <Route path="/movie/:movieId" component={MoviePage} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};
