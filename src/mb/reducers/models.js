import { handleActions } from 'redux-actions';

import actionCreators from '../actions/models-action-creators';

const initialState = {
  inTheaters: { count: 0, subjects: [] },
  comingSoon: { count: 0, subjects: [] }
};

export default handleActions({
  [actionCreators.loadInTheaters](state, action) {
    return {
      ...state,
      inTheaters: action.payload
    };
  },
  [actionCreators.loadComingSoon](state, action) {
    return {
      ...state,
      comingSoon: action.payload
    };
  },
  [actionCreators.loadTop250](state, action) {
    return {
      ...state,
      top250: action.payload
    };
  },
  [actionCreators.loadMovie](state, action) {
    return {
      ...state,
      movies: {
        ...state.movies,
        [action.payload.id]: action.payload
      }
    };
  }
}, initialState);
