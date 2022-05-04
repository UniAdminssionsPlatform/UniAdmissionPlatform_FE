import CreateEventFormComponent from '../../../components/form/CreateEventForm/CreateEventForm.component';
import React, { useEffect, useState } from 'react';
import ListHighSchool from '../../../components/ListHighSchool/ListHighSchool.component';
import { people } from './Data/FakeData';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import { useSelector } from 'react-redux';
import { getListHighSchool } from '../../../services/HighSchoolService';
import { getListSlotByHighSchoolId } from '../../../services/AdminUniversitySlotService';

const CreateEventContainer = () => {
  const [listHighSchool, setlistHighSchool] = useState();
  const [dataSearch, setDataSeacrch] = useState();
  const [listSlotHighSchool, setListSlotHighSchool] = useState();
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
  const getListSlotByHighSchoolID = (id) => {
    if (id) {
      getListSlotByHighSchoolId(id)
        .then((res) => {
          setListSlotHighSchool(res.data);
          handleSuccessNotification('Danh sách slot');
        })
        .catch((err) => {
          handleFailNotification('Lỗi khi lấy danh sách');
        });
    }
  };
  const { isSelected, highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);
  useEffect(() => {
    getListHSchool(dataSearch);
  }, [dataSearch, isClicked]);
  useEffect(() => {
    getListSlotByHighSchoolID(highSchool.id);
  }, [highSchool]);
  return (
    <>
      <ListHighSchool
        people={people}
        listHighSchool={listHighSchool}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      {/*<CreateEventFormComponent onFinish={onFinish} />*/}
    </>
  );
};

export default CreateEventContainer;
