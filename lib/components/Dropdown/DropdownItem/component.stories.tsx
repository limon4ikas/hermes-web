import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropdownItem } from './component';

export default {
  component: DropdownItem,
  title: 'components/Dropdown/Dropdown Item',
} as Meta;

const Template: Story = (args) => <DropdownItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
