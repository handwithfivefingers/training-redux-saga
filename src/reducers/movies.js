import * as MoviesContants from './../contants/movies';
import { toastError, toastinfo } from '../helper/toastHelper';
const initialState = {
  listmovies: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MoviesContants.LOAD_MOVIES: {
      return {
        ...state,
        // listmovies: [],
      };
    }
    default:
      return state;
  }
};
export default reducer;
