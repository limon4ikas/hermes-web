import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from './component';

export default {
  component: Spinner,
  title: 'components/Spinner',
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
