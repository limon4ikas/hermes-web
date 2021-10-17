import { Meta, Story } from '@storybook/react';
import { SpinnerSize } from '.';
import { Spinner, SpinnerProps } from './component';

export default {
  component: Spinner,
  title: 'components/Spinner',
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: SpinnerSize.MEDIUM,
};
