import { handleActions } from 'redux-actions';

import actionCreators from '../actions/search-action-creators';

const initialState = {
  searchValue: '',
  searchResult: null,
};

export default handleActions({
  [actionCreators.search](state, action) {
    return {
      ...state,
      searchResult: action.payload
    };
  },
  [actionCreators.setSearchValue](state, action) {
    return {
      ...state,
      searchValue: action.payload
    };
  }
}, initialState);
