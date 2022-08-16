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
import {
  COLOR_EVENT_CANCEL,
  COLOR_EVENT_DENY,
  COLOR_EVENT_DONE,
  COLOR_EVENT_ON_GOING,
  COLOR_EVENT_REGISTERING,
  COLOR_HIPPIES,
  COLOR_SLOT_IS_CLOSE,
  COLOR_SLOT_IS_FULL,
  COLOR_SLOT_IS_OPEN
} from '../../../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { EVENT, EVENT_CHECK, SLOT } from '../../../../constants/AppConst';
import { Paper } from '@mui/material';
import AppointmentHeaderComponent from '../../../../components/schedule/component/AppointmentHeader.component';
import AppointmentContentComponent from '../../../../components/schedule/component/AppointmentContent.component';
import './ScheduleEventCheckHighSchool.module.css';
import moment from 'moment';
import { Badge, Typography } from 'antd';
const ScheduleEventCheckHighSchoolComponent = (props) => {
  const { Text } = Typography;
  const { listEventCheck } = props;
  const handleColorEvent = (data) => {
    //check event-check
    if (data.infor.status === EVENT_CHECK.PENDING) return COLOR_EVENT_REGISTERING;
    if (data.infor.status === EVENT_CHECK.REJECT) return COLOR_EVENT_DENY;
    if (data.infor.event.status === EVENT.ON_GOING) return COLOR_EVENT_ON_GOING;
    if (data.infor.event.status === EVENT.CANCEL) return COLOR_EVENT_CANCEL;
    if (data.infor.event.status === EVENT.DONE) return COLOR_EVENT_DONE;
  };
  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: handleColorEvent(data),
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
