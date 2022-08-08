import { eventPublishAction } from './eventPublish-slice';

export const storeEventPublish = (data) => (dispatch) => {
  dispatch(eventPublishAction.storeEventPublish(data));
};

export const cleanEventPublish = () => (dispatch) => {
  dispatch(eventPublishAction.cleanEventPublish());
};
