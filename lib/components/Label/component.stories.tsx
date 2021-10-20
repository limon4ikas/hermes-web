import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from './component';

export default {
  component: Label,
  title: 'form/base/Base Label',
} as Meta;
``;

const Template: Story<LabelProps> = (args) => (
  <Label {...args}>Test button</Label>
);

export const Primary = Template.bind({});
Primary.args = {};
