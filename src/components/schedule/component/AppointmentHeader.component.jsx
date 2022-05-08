import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import * as React from 'react';

const AppointmentHeaderComponent = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Header {...restProps}>{children}</AppointmentTooltip.Header>
);
export default AppointmentHeaderComponent;
