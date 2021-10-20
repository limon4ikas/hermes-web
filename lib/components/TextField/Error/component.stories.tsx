import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextFieldError, TextFieldErrorProps } from './component';

export default {
  component: TextFieldError,
  title: 'components/TextFieldError',
} as Meta;

const Template: Story<TextFieldErrorProps> = (args) => (
  <TextFieldError {...args}>Test error</TextFieldError>
);

export const Primary = Template.bind({});
Primary.args = {};
