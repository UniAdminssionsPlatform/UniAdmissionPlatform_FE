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
import { COLOR_SLOT_CLOSE, COLOR_SLOT_FULL, COLOR_SLOT_OPEN } from '../../../../../constants/Color';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { SLOT, SLOT_IS_FULL, SLOT_IS_OPEN } from '../../../../../constants/AppConst';
import AppointmentContentComponent from '../../../../../components/schedule/component/AppointmentContent.component';
import AppointmentHeaderComponent from '../../../../../components/schedule/component/AppointmentHeader.component';
import Paper from '@mui/material/Paper';
import React from 'react';
import SlotComponent from '../../../../../components/schedule/component/Slot.component';
import moment from 'moment';
import { notification, Typography } from 'antd';
import WarningIcon from '@mui/icons-material/Warning';
const SelectSlotComponent = (props) => {
  const { listSlot, setCurrentSlotSelected } = props;
  const { Text } = Typography;
  const openNotification = () => {
    const args = {
      message: (
        <Text strong>
          <WarningIcon style={{ color: COLOR_SLOT_CLOSE }} /> Thông báo sự kiện
        </Text>
      ),
      description:
        'Slot bạn đang chọn, đang nằm trong thời gian học sinh nghỉ hè. Sự kiện bạn tổ chức sẽ không đạt hiểu quả cao!',
      duration: 0
    };
    notification.open(args);
  };
  const AppointmentComponent = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor:
          data?.status === SLOT.OPEN
            ? COLOR_SLOT_OPEN
            : data?.status === SLOT.FULL
            ? COLOR_SLOT_FULL
            : COLOR_SLOT_CLOSE,
        borderRadius: '8px'
      }}
      data={data}
      onClick={() => {
        if (
          moment(data.startDate).isAfter(moment('2022-06-01T01:14:00.000Z')) &&
          moment(data.startDate).isBefore(moment('2022-10-01T01:14:00.000Z'))
        ) {
          if (data?.status === SLOT.OPEN) setCurrentSlotSelected(data);
          openNotification();
        } else if (data?.status === SLOT.OPEN) setCurrentSlotSelected(data);
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
