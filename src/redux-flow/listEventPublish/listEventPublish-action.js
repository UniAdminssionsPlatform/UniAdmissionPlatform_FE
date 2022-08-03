import { listEventPublishAction } from './listEventPublish-slice';

export const storeListEventPublish = (data) => (dispatch) => {
  dispatch(listEventPublishAction.storeListEventPublish(data));
};

export const cleanListEventPublish = () => (dispatch) => {
  dispatch(listEventPublishAction.cleanListEventPublish());
};
