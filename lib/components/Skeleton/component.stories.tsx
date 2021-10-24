import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from './component';

export default {
  component: Skeleton,
  title: 'components/Skeleton',
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
