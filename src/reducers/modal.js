import * as modalType from './../contants/modal';
const initialState = { showModal: false, title: '', component: null };
/**
 * Nơi thực thi các Actions
 * Nếu Action là SHOW_LOADING/ HIDE_LOADING thì set state store showLoading ....
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalType.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case modalType.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
        title: '',
        component: null,
      };
    }
    case modalType.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    }
    case modalType.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    }
    default:
      return state;
  }
};
export default reducer;
