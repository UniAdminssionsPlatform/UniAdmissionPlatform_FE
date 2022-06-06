import { Skeleton } from 'antd';
import { getListSlotBySchoolId } from '../../../../services/AdminUniversitySlotServices';
import { handleFailNotification, handleSuccessNotification } from '../../../../notification/CreateEventNotification';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import SelectSlotComponent from './components/SelectSlot.component';

const SelectSlotContainer = (props) => {
  const { setCurrentSlotSelected } = props;
  const { highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isLoading, setIsLoading] = useState(true);
  const [listSlot, setListSlot] = useState();
  const getListSlot = (id) => {
    if (id) {
      getListSlotBySchoolId(id)
        .then((res) => {
          handleSuccessNotification('Danh sách các slot trống');
          setIsLoading(false);
          setListSlot(res.data.data.list);
        })
        .catch((err) => {
          handleFailNotification('Lỗi khi lấy danh sách');
        });
    }
  };
  useEffect(() => {
    getListSlot(highSchool?.id);
  }, [highSchool]);
  return isLoading ? (
    <Skeleton />
  ) : (
    <SelectSlotComponent listSlot={listSlot} setCurrentSlotSelected={setCurrentSlotSelected} />
  );
};
export default SelectSlotContainer;
