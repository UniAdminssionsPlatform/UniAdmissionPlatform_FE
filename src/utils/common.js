import { EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../constants/AppConst';

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
  listData?.list.map((data) => {
    const event = data.event;
    event.eventCheckStatus = data.status;
    event.eventCheckId = data.id;
    event.eventCreateAt = data.createdAt;
    event.startTime = data.slot.startDate;
    event.endTime = data.slot.endDate;
    event.reason = data.reason;
    event.status = data.status;
    event.highschool = data.slot.highSchoolName;
    result.push(event);
  });
  return result;
};
export const eventType = (eventType) => {
  if (eventType === EVENT_ONLINE) return 'Sự Kiện Trực Tuyến';
  if (eventType === EVENT_HS) return 'Sự Kiện Tại Trường Cấp 3';
  if (eventType === EVENT_ORG) return 'Sự Kiện Tại Một Địa Điểm Khác';
  if (eventType === EVENT_UNI) return 'Sự Kiện Tại Trường Đại Học';
};
