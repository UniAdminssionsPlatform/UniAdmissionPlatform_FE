export const refactorData = (listData) => {
  const result = [];
  listData?.map((data) => {
    const event = data.event;
    result.push(data.event);
  });
  return result;
};
export const refactorDataSlot = (listData) => {
  const result = [];
  listData?.map((data) => {
    const event = data.event;
    event.startDate = data.slot.startDate ? data.slot.startDate : '';
    event.endDate = data.slot.endDate;
    result.push(data.event);
  });
  return result;
};
export const refactorDataSlotEventCheckID = (listData) => {
  const result = [];
  listData?.map((data) => {
    const event = data.event;
    event.eventCheckStatus = data.status;
    event.eventCheckId = data.id;
    result.push(event);
  });
  return result;
};
