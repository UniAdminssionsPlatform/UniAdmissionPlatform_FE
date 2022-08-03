import { listNewPublishAction } from './listNewPublish-slice';

export const storeNewsPublish = (data) => (dispatch) => {
  dispatch(listNewPublishAction.storeListNewPublish(data));
};

export const cleanNewsPublish = () => (dispatch) => {
  dispatch(listNewPublishAction.cleanListNewPublish());
};
