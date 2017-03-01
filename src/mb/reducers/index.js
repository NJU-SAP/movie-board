import { combineReducers } from 'redux';

import models from './models';
import search from './search';

export default combineReducers({
  models,
  search
});
