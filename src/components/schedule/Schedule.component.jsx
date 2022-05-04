import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button } from 'antd';
import moment from 'moment';
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
  AppointmentForm,
  Resources,
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './fakeData';
import { useEffect, useState } from 'react';
import { room } from './demo-data/task';
const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#FFC107',
      borderRadius: '8px'
    }}>
    <Button type='primary'> Delete</Button>
    {children}
  </Appointments.Appointment>
);
const header = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Header {...restProps}>
    Hello
    {children}
  </AppointmentTooltip.Header>
);
const content = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Content {...restProps}>
    Hello
    {children}
  </AppointmentTooltip.Content>
);
const ScheduleComponent = () => {
  const [data, setData] = useState(appointments);
  const currentDate = moment().toDate();
  const commitChanges = ({ added, changed, deleted }) => {
    if (added) setData([...data, { id: data.length > 0 ? data[data.length - 1].id + 1 : 0, ...added }]);
    if (changed) {
      console.log(data);
      setData(
        data.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        )
      );
      console.log(data);
    }
    if (deleted !== undefined) setData(data.filter((appointment) => appointment.id !== deleted));
  };
  const mock = {
    data: appointments,
    resources: [
      {
        fieldName: 'id',
        title: 'Room',
        instances: room
      }
    ]
  };
  return (
    <>
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState />
          <EditingState onCommitChanges={commitChanges} />
          <EditRecurrenceMenu />
          <DayView startDayHour={7} endDayHour={20} />
          <WeekView startDayHour={7} endDayHour={20} />
          <MonthView startDayHour={7} endDayHour={20} />
          <Toolbar />
          <ViewSwitcher />
          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip showOpenButton headerComponent={header} contentComponent={content} />
          <AppointmentForm />
          <Resources data={mock.resources} mainResourceName='roomId' />
          <DateNavigator />
          <TodayButton />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </>
  );
};
export default ScheduleComponent;
