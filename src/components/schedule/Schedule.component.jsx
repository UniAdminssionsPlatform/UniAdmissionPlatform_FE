import * as React from 'react';
import {
  AppointmentTooltip,
  Appointments,
  DateNavigator,
  DayView,
  DragDropProvider,
  EditRecurrenceMenu,
  MonthView,
  Scheduler,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { Typography } from 'antd';
import { room } from './demo-data/task';
import { useState } from 'react';
import AppointmentContentComponent from './component/AppointmentContent.component';
import AppointmentHeaderComponent from './component/AppointmentHeader.component';
import Paper from '@mui/material/Paper';
const ScheduleComponent = (props) => {
  const { listSlot, setIsModalOpen } = props;
  const [data, setData] = useState();
  const { Title, Text } = Typography;

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

  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: data?.status === 1 ? '#b2fab4' : '#ffebee',
        borderRadius: '8px'
      }}
      data={data}
      onDoubleClick={data?.status === 1 ? () => setIsModalOpen(true) : null}>
      {data?.status === 0 ? (
        <Text type='secondary' strong style={{ padding: '1px' }}>
          Không khả dụng
        </Text>
      ) : (
        <Text type='secondary' strong style={{ padding: '1px' }}>
          Nhấp click chuột vào đây để đặt lịch
        </Text>
      )}
      {children}
    </Appointments.Appointment>
  );
  // const mock = {
  //   data: appointments,
  //   resources: [
  //     {
  //       fieldName: 'id',
  //       title: 'Room',
  //       instances: room
  //     }
  //   ]
  // };
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
          {/*<AppointmentForm />*/}
          {/*<Resources data={mock.resources} mainResourceName='roomId' />*/}
          <DateNavigator />
          <TodayButton />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </>
  );
};
export default ScheduleComponent;
