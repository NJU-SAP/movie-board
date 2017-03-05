import { StaticRouter } from 'react-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from '../../src/mb/Root';
import configStore from '../../src/mb/store';
import template from './template';
import comingSoon from '../data/comingSoon.json';
import inTheaters from '../data/inTheaters.json';
import top250 from '../data/top250.json';

export default function serve(req, res) {
  const initialState = { models: { comingSoon, inTheaters, top250, movies: {} } };
  const store = configStore(initialState);
  const body = ReactDOMServer.renderToString(
    <StaticRouter location="/" context={{}}>
      <Root store={store} />
    </StaticRouter>
  );
  res.header("Content-Type", 'text/html; charset=utf-8');
  res.send(template({ body, initialState }));
}
