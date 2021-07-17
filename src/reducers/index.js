import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modal';
import taskReducer from './task';
import uiReducer from './ui';
import userReducer from './user';
import moviesReducer from './movies';
const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  user: userReducer,
  listmovies: moviesReducer,
  form: formReducer,
});
export default rootReducer;
