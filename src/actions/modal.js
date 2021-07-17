import * as modalType from './../contants/modal';
/**
 * Nơi Khai Báo các Actions type ( loại Action )
 * showModal -> Nếu loại Action là SHOW_LOADING ( contants) -> Qua Reducers
 * hideModal -> Nếu loại Action là HIDE_LOADING ( contants) -> Qua Reducers
 */
export const showModal = () => ({
  type: modalType.SHOW_MODAL,
});

export const hideModal = () => ({
  type: modalType.HIDE_MODAL,
});
export const changeModalTitle = (title) => ({
  type: modalType.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});

export const changeModalContent = (component) => ({
  type: modalType.CHANGE_MODAL_CONTENT,
  payload: {
    component,
  },
});
