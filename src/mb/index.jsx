import React from 'react';
import { render } from 'react-dom';

import Root from './Root';
import configStore from './store';

const store = configStore();

render(
  <Root store={store} />,
  document.getElementById('mbMountPoint')
);
