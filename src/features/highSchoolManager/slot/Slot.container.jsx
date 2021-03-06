import { Spin } from 'antd';
import { createNewSlot, getListSlotHighSchool } from '../../../services/AdminHighSchoolSlotsService';
import { handleCreateNotification, handleQueryNotification } from '../../../notification/CreateSlotNotification';
import Layout from '../../../components/Layout';
import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import LeftBarComponent from './components/LeftBar.component';
import React, { useEffect, useState } from 'react';
import ScheduleHighSchoolComponent from './components/ScheduleHighSchool.component';
import TitlePageComponent from '../../../components/decorator/TitlePage.component';

const SlotContainer = () => {
  const [isButtonCreateSlotClicked, setIsButtonCreateSlotClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [dataSearch, setDataSearch] = useState();
  const [listSlot, setListSlot] = useState();
  const [listAddingSlot, setListAddingSlot] = useState([]);
  const getListSlot = () => {
    setIsLoading(true);
    getListSlotHighSchool(dataSearch)
      .then((res) => {
        setReloadTrigger(false);
        setIsLoading(false);
        handleQueryNotification('success');
        setListSlot(res?.data.data.list);
      })
      .catch((err) => {
        handleQueryNotification('error');
      });
  };
  useEffect(() => {
    getListSlot();
  }, [reloadTrigger, dataSearch]);
  useEffect(() => {
    createListSLotEvent(listAddingSlot);
  }, [listAddingSlot]);
  const createListSLotEvent = (listSlot) => {
    if (listSlot !== undefined && listSlot.length > 0) {
      setReloadTrigger(false);
      createNewSlot(listSlot)
        .then((res) => {
          setIsButtonCreateSlotClicked(false);
          handleCreateNotification('success', res);
          setReloadTrigger(true);
        })
        .catch((error) => {
          handleCreateNotification('error', error.response.data.msg);
        });
    }
  };

  return (
    <Layout>
      <TitlePageComponent
        title={'X??t duy???t t??i kho???n'}
        subTitle={
          'B???n c?? th??? t??m ki???m t??i kho???n c???n ???????c x??t duy???t b???ng t??n, email v?? s??? ??i???n tho???i. Th???c hi???n thao t??c x??t duy???t trong panel d?????i ????y'
        }
      />
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <LeftBarComponent
            setListAddingSlot={setListAddingSlot}
            isButtonCreateSlotClicked={isButtonCreateSlotClicked}
            setIsButtonCreateSlotClicked={setIsButtonCreateSlotClicked}
            setDataSearch={setDataSearch}
          />
        </div>
        {isLoading ? (
          <Spin />
        ) : (
          <ScheduleHighSchoolComponent
            listSlot={listSlot}
            setListSlot={setListSlot}
            setListAddingSlot={setListAddingSlot}
            setReloadTrigger={setReloadTrigger}
          />
        )}
      </div>
    </Layout>
  );
};
export default SlotContainer;
