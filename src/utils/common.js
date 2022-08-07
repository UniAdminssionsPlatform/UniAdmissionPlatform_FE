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
  console.log(listData);
  const result = [];
  listData?.list.map((data) => {
    const event = data.event;
    event.eventCheckStatus = data.status;
    event.eventCheckId = data.id;
    event.eventCreateAt = data.createdAt;
    event.startTime = data.slot.startDate;
    event.endTime = data.slot.endDate;
    event.reason = data.reason;
    event.status = data.status;
    result.push(event);
  });
  console.log(result);
  return result;
};
