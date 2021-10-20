import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NotificationAlert, NotificationAlertProps } from './component';

export default {
  component: NotificationAlert,
  title: 'components/Notification Alert',
} as Meta;

const Template: Story<NotificationAlertProps> = (args) => (
  <NotificationAlert {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'success',
  message: 'Successfully registered',
};
