import { commentAction } from './comment-slice';

export const storeComment = (data) => (dispatch) => {
  dispatch(commentAction.storeComments(data));
};

export const cleanComment = () => (dispatch) => {
  dispatch(commentAction.cleanComments());
};
