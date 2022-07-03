export const refactorData = (listData) => {
  const result = [];
  listData?.map((data) => {
    result.push(data.event);
  });
  return result;
};
