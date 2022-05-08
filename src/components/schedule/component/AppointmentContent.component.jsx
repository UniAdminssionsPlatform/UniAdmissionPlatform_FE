import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import * as React from 'react';

const AppointmentContentComponent = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Content {...restProps}>{children}</AppointmentTooltip.Content>
);
export default AppointmentContentComponent;
