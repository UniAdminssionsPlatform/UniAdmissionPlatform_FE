import * as React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';

const AppointmentHeaderComponent = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Header {...restProps}>{children}</AppointmentTooltip.Header>
);
export default AppointmentHeaderComponent;
