import * as MoviesContants from './../contants/movies'; // các action types
import { STATUSUS } from './../contants/index';
export const LoadMovies = () => {
  return {
    type: MoviesContants.LOAD_MOVIES,
  };
};
