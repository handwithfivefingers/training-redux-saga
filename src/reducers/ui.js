import * as LoadingType from './../contants/ui';
const initialState = {
  showLoading: false,
};
/**
 * Nơi thực thi các Actions
 * Nếu Action là SHOW_LOADING/ HIDE_LOADING thì set state store showLoading ....
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadingType.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case LoadingType.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
