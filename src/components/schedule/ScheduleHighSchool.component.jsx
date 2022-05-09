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
import { Typography, Button } from 'antd';
import { useState } from 'react';

const ScheduleHighSchoolComponent = (props) => {
  const { listSlot, setListSlot } = props;
  const [slotSelected, SetSlotSelected] = useState();
  const { Title, Text } = Typography;

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
        backgroundColor: data?.status === 1 ? '#b2fab4' : '#ffebee',
        borderRadius: '8px'
      }}
      data={data}
      onClick={(lol) => {
        SetSlotSelected(data);
      }}
      // onDoubleClick={data?.status === 1 ? () => setIsModalOpen(true) : null}
    >
      {data?.status === 0 ? (
        <Text type='secondary' strong style={{ padding: '1px' }}>
          Slot đã được đặt
        </Text>
      ) : (
        <Text type='secondary' strong style={{ padding: '1px' }}>
          Slot đang trống
        </Text>
      )}
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
  return (
    <>
      <Paper>
        <Scheduler data={listSlot} height={660}>
          <ViewState />
          <EditingState onCommitChanges={commitChanges} />
          <EditRecurrenceMenu />
          <MonthView startDayHour={7} endDayHour={20} />
          <DayView startDayHour={7} endDayHour={20} />
          <WeekView startDayHour={7} endDayHour={20} />
          <Toolbar />
          <ViewSwitcher />
          <Appointments appointmentComponent={AppointmentComponent} />
          <AppointmentTooltip
            headerComponent={AppointmentHeaderComponent}
            contentComponent={AppointmentContentComponent}
          />
          <DateNavigator />
          <TodayButton />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </>
  );
};
export default ScheduleHighSchoolComponent;
