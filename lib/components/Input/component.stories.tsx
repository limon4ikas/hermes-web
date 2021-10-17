import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './component';

export default {
  component: Input,
  title: 'form/base/Base Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
  variant: 'primary',
};
