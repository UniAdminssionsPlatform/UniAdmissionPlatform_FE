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
import { COLOR_SLOT_IS_CLOSE, COLOR_SLOT_IS_FULL, COLOR_SLOT_IS_OPEN } from '../../../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { SLOT } from '../../../../constants/AppConst';
import { Paper } from '@mui/material';
import AppointmentHeaderComponent from '../../../../components/schedule/component/AppointmentHeader.component';
import AppointmentContentComponent from '../../../../components/schedule/component/AppointmentContent.component';
import SlotComponent from '../../../../components/schedule/component/Slot.component';

const ScheduleEventCheckHighSchoolComponent = (props) => {
  const { listEventCheck } = props;
  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor:
          data?.status === SLOT.OPEN
            ? COLOR_SLOT_IS_OPEN
            : data?.status === SLOT.FULL
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
        <Scheduler data={listEventCheck} height={750}>
          <ViewState />
          <EditingState />
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
export default ScheduleEventCheckHighSchoolComponent;
