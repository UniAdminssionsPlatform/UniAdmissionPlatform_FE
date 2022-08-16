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
import { COLOR_EVENT_CANCEL, COLOR_EVENT_DONE, COLOR_EVENT_ON_GOING, COLOR_HIPPIES } from '../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { EVENT, SLOT } from '../../constants/AppConst';
import AppointmentContentComponent from './component/AppointmentContent.component';
import AppointmentHeaderComponent from './component/AppointmentHeader.component';
import Paper from '@mui/material/Paper';
import { Badge, Modal, Typography } from 'antd';
import moment from 'moment';

const ScheduleEventComponent = (props) => {
  const { Text } = Typography;
  const { listSlot } = props;
  console.log(listSlot);
  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor:
          data.infor.event.status === EVENT.DONE
            ? COLOR_EVENT_DONE
            : data.infor.event.status === EVENT.ON_GOING || data.infor.event.status === EVENT.INIT
            ? COLOR_EVENT_ON_GOING
            : COLOR_EVENT_CANCEL,
        borderRadius: '8px'
      }}
      data={data}>
      {
        <Badge.Ribbon text={moment(data?.startDate).format('LT')} color={COLOR_HIPPIES}>
          <Text strong>{data.infor.event.name}</Text>
          <br />
          <Text>{data.infor.slot.highSchoolName}</Text>
        </Badge.Ribbon>
      }
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
export default ScheduleEventComponent;
