import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configStore from './store';
import configRoutes from './routes';

const store = configStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      {configRoutes()}
    </BrowserRouter>
  </Provider>,
  document.getElementById('mbMountPoint')
);
