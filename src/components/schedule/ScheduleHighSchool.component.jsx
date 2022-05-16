import * as React from 'react';
import Paper from '@mui/material/Paper';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DragDropProvider,
  EditRecurrenceMenu,
  AppointmentTooltip,
  DayView,
  MonthView,
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';
import AppointmentHeaderComponent from './component/AppointmentHeader.component';
import { Modal } from 'antd';
import { useState } from 'react';
import SlotComponent from './component/Slot.component';
import { SLOT_IS_FULL, SLOT_IS_OPEN } from '../../constants/AppConst';
import { COLOR_SLOT_IS_CLOSE, COLOR_SLOT_IS_FULL, COLOR_SLOT_IS_OPEN } from '../../constants/Color';
import SlotDetail from './component/SlotDetail.container';

const ScheduleHighSchoolComponent = (props) => {
  const { listSlot, setListSlot, setReloadTrigger } = props;
  const [slotSelected, SetSlotSelected] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const commitChanges = ({ added, changed, deleted }) => {
    if (added)
      setListSlot([...listSlot, { id: listSlot.length > 0 ? listSlot[listSlot.length - 1].id + 1 : 0, ...added }]);
    if (changed) {
      setListSlot(
        listSlot.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        )
      );
    }
    if (deleted !== undefined) setListSlot(listSlot.filter((appointment) => appointment.id !== deleted));
  };

  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor:
          data?.status === SLOT_IS_OPEN
            ? COLOR_SLOT_IS_OPEN
            : data?.status === SLOT_IS_FULL
            ? COLOR_SLOT_IS_FULL
            : COLOR_SLOT_IS_CLOSE,
        borderRadius: '8px'
      }}
      data={data}
      onClick={() => {
        setIsModalVisible(true);
        SetSlotSelected(data);
      }}
      // onDoubleClick={data?.status === 1 ? () => setIsModalOpen(true) : null}
    >
      <SlotComponent data={data} />
      {children}
    </Appointments.Appointment>
  );
  const AppointmentContentComponent = ({ children, style, ...restProps }) => (
    <AppointmentTooltip.Content {...restProps}>
      <div style={{ padding: '1rem' }}>
        {/*{slotSelected.status != 1 ? <Button type='primary'>Thông tin chi tiết</Button> : null}*/}
      </div>
      {children}
    </AppointmentTooltip.Content>
  );
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title='Thông tin Slot'
        visible={isModalVisible}
        footer={<></>}
        width={500}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}>
        <SlotDetail slotSelected={slotSelected} setReloadTrigger={setReloadTrigger} />
      </Modal>
      <Paper>
        <Scheduler data={listSlot} height={935}>
          <ViewState />
          <EditingState onCommitChanges={commitChanges} />
          <EditRecurrenceMenu />
          <WeekView startDayHour={7} endDayHour={20} />
          <MonthView startDayHour={7} endDayHour={20} />
          <DayView startDayHour={7} endDayHour={20} />
          <Toolbar />
          <ViewSwitcher />
          <Appointments appointmentComponent={AppointmentComponent} />
          <AppointmentTooltip
            headerComponent={AppointmentHeaderComponent}
            contentComponent={AppointmentContentComponent}
          />
          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    </>
  );
};
export default ScheduleHighSchoolComponent;
