import * as UIType from './../contants/ui';
/**
 * Nơi Khai Báo các Actions type ( loại Action )
 * showLoading -> Nếu loại Action là SHOW_LOADING ( contants) -> Qua Reducers
 * hideLoading -> Nếu loại Action là HIDE_LOADING ( contants) -> Qua Reducers
 */
export const showLoading = () => ({
  type: UIType.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: UIType.HIDE_LOADING,
});
