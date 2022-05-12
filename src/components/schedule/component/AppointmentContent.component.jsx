import * as React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';

const AppointmentContentComponent = ({ children, style, ...restProps }) => (
  <AppointmentTooltip.Content {...restProps}>{children}</AppointmentTooltip.Content>
);
export default AppointmentContentComponent;
