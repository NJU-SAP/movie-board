import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import configStore from './store';

const initialState = window.__app_initial_state__;
const store = configStore(initialState);

render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('mbMountPoint')
);
