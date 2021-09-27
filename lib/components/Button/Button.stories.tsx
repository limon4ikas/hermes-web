import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

export const Primary = () => <Button>Test button</Button>;
