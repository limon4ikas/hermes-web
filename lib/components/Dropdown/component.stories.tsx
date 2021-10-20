import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from './component';

export default {
  component: Dropdown,
  title: 'components/Dropdown',
} as Meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
