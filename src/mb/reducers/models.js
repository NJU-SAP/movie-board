import { handleActions } from 'redux-actions';

import actionCreators from '../actions/models-action-creators';

const initialState = {
  comingSoon: { count: 0, subjects: [] },
  inTheaters: { count: 0, subjects: [] },
  top250: { count: 0, subjects: [] },
  movies: { }
};

export default handleActions({
  [actionCreators.loadInTheaters](state, action) {
    return {
      ...state,
      inTheaters: {
        subjects: state.inTheaters.subjects.concat(action.payload.subjects)
      }
    };
  },
  [actionCreators.loadComingSoon](state, action) {
    return {
      ...state,
      comingSoon: {
        subjects: state.comingSoon.subjects.concat(action.payload.subjects)
      }
    };
  },
  [actionCreators.loadTop250](state, action) {
    return {
      ...state,
      top250: {
        subjects: state.top250.subjects.concat(action.payload.subjects)
      }
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
