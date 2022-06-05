import { bookASlotInAdminUniversity } from '../../../services/AdminUniversitySlotServices';
import { getListEventForUniversity } from '../../../services/GetListEventForUniversity';
import { useSelector } from 'react-redux';
import ListEventForRegisterUniversityComponent from './components/ListEvent/ListEventForRegisterUniversity.component';
import React, { useEffect, useState } from 'react';

const ListEventForRegisterUniversityContainer = () => {
  const [listEventRegister, setListEventRegister] = useState();
  const { user } = useSelector((state) => state.authentication);
  const { slot } = useSelector((state) => state.selectedSlot);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    eventType: '',
    status: '',
    universityID: user.userId ? user.userId : 1
  });

  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch]);

  const getEventForUniversity = (data) => {
    getListEventForUniversity(data).then((result) => {
      setListEventRegister(result.data.data.list);
    });
  };
  const handleBookingSlot = (data) => {
    // bookASlotInAdminUniversity({ eventId: data, slotId: slot.data.id })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <ListEventForRegisterUniversityComponent
      listEventRegister={listEventRegister}
      setDataSearch={setDataSearch}
      handleBookingSlot={handleBookingSlot}
    />
  );
};
export default ListEventForRegisterUniversityContainer;
