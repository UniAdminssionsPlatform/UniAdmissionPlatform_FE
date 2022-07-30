import { eventPublishAction } from './eventPublish-slice';

export const storeEventPublish = (data) => (dispatch) => {
  console.log(data);
  dispatch(eventPublishAction.storeEventPublish(data));
};

export const cleanEventPublish = () => (dispatch) => {
  dispatch(eventPublishAction.cleanEventPublish());
};
