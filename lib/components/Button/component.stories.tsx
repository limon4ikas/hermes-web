import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, ButtonVariant, ButtonSize } from './component';

export default {
  component: Button,
  title: 'components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.variant}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
};
