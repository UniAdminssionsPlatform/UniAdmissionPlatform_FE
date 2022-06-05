import * as React from 'react';
import {
  AppointmentTooltip,
  Appointments,
  DateNavigator,
  DayView,
  EditRecurrenceMenu,
  MonthView,
  Scheduler,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
import { COLOR_SLOT_IS_CLOSE, COLOR_SLOT_IS_FULL, COLOR_SLOT_IS_OPEN } from '../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { SLOT_IS_FULL, SLOT_IS_OPEN } from '../../constants/AppConst';
import { useState } from 'react';
import AppointmentContentComponent from './component/AppointmentContent.component';
import AppointmentHeaderComponent from './component/AppointmentHeader.component';
import Paper from '@mui/material/Paper';
import SlotComponent from './component/Slot.component';

const ScheduleEventComponent = (props) => {
  const { listSlot } = props;
  const [data, setData] = useState();
  const commitChanges = ({ added, changed, deleted }) => {
    if (added) setData([...data, { id: data.length > 0 ? data[data.length - 1].id + 1 : 0, ...added }]);
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        )
      );
    }
    if (deleted !== undefined) setData(data.filter((appointment) => appointment.id !== deleted));
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
      onClick={() => {}}>
      <SlotComponent data={data} />
      {children}
    </Appointments.Appointment>
  );
  return (
    <>
      <Paper>
        <Scheduler data={listSlot} height={750}>
          <ViewState />
          <EditingState onCommitChanges={commitChanges} />
          <EditRecurrenceMenu />
          <MonthView startDayHour={7} endDayHour={20} />
          <WeekView startDayHour={7} endDayHour={20} />
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
export default ScheduleEventComponent;
