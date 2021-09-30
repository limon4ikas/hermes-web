import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Test button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
