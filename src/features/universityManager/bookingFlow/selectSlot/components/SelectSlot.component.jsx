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
import { COLOR_SLOT_IS_CLOSE, COLOR_SLOT_IS_FULL, COLOR_SLOT_IS_OPEN } from '../../../../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { SLOT, SLOT_IS_FULL, SLOT_IS_OPEN } from '../../../../../constants/AppConst';
import AppointmentContentComponent from '../../../../../components/schedule/component/AppointmentContent.component';
import AppointmentHeaderComponent from '../../../../../components/schedule/component/AppointmentHeader.component';
import Paper from '@mui/material/Paper';
import React from 'react';
import SlotComponent from '../../../../../components/schedule/component/Slot.component';

const SelectSlotComponent = (props) => {
  const { listSlot, setCurrentSlotSelected } = props;
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
        if (data?.status === SLOT.OPEN) setCurrentSlotSelected(data);
      }}>
      <SlotComponent data={data} />
      {children}
    </Appointments.Appointment>
  );
  return (
    <>
      <Paper>
        <Scheduler data={listSlot} height={750}>
          <ViewState />
          <EditingState />
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
export default SelectSlotComponent;
