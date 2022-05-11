import SlotManagerComponent from '../../components/SlotManager/SlotManager.component';
import { useEffect, useState } from 'react';
import { createNewSlot, getListSlotHighSchool } from '../../services/AdminHighSchoolSlotsService';

const SlotManagerContainer = () => {
  const [listSlot, setListSlot] = useState();
  const [listAddingSlot, setListAddingSlot] = useState([]);
  const getListSlot = () => {
    getListSlotHighSchool()
      .then((res) => {
        setListSlot(res?.data.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getListSlot();
  }, [listAddingSlot]);
  const createListSLotEvent = (listSlot) => {
    if (listSlot !== undefined && listSlot.length > 0) {
      console.log('Calling');
      createNewSlot(listSlot)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    createListSLotEvent(listAddingSlot);
  }, [listAddingSlot]);

  return <SlotManagerComponent listSlot={listSlot} setListSlot={setListSlot} setListAddingSlot={setListAddingSlot} />;
};
export default SlotManagerContainer;
