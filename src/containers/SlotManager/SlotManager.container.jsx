import SlotManagerComponent from '../../components/SlotManager/SlotManager.component';
import { useEffect, useState } from 'react';
import { getListSlotHighSchool } from '../../services/AdminHighSchoolSlotsService';

const SlotManagerContainer = () => {
  const [listSlot, setListSlot] = useState();
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
  }, []);
  return <SlotManagerComponent listSlot={listSlot} setListSlot={setListSlot} />;
};
export default SlotManagerContainer;
