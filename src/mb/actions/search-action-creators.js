import { createAction } from 'redux-actions';

import movieApi from '../../db/api/movie';

export default {
  loadInTheaters: createAction('LOAD_IN_THEATERS', movieApi.inTheaters),
  setSearchValue: createAction('SET_SEARCH_VALUE', payload => payload),
  search: createAction('SEARCH', payload => ['xxx', 'xxx', payload]),
};
