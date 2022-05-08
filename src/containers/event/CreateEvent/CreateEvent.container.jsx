import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import React, { useEffect, useState } from 'react';
import ListHighSchool from '../../../components/ListHighSchool/ListHighSchool.component';
import { people } from './Data/FakeData';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import { getListHighSchool } from '../../../services/HighSchoolServices';
import { useSelector } from 'react-redux';

const CreateEventContainer = () => {
  const [listHighSchool, setlistHighSchool] = useState();
  const [dataSearch, setDataSeacrch] = useState();
  const getListHSchool = (data) => {
    getListHighSchool(data)
      .then((res) => {
        setlistHighSchool(res.data.data.list);
        handleSuccessNotification('Danh sách các trường cấp 3');
      })
      .catch((err) => {
        handleFailNotification('Lỗi khi lấy danh sách');
      });
  };
  const { isSelected, highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);
  useEffect(() => {
    getListHSchool(dataSearch);
  }, [dataSearch, isClicked]);
  return (
    <>
      <ListHighSchool
        people={people}
        listHighSchool={listHighSchool}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      {/*<CreateEventComponent onFinish={onFinish} />*/}
    </>
  );
};

export default CreateEventContainer;
