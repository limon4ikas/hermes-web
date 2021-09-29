import { Meta, Story } from '@storybook/react';
import { Formik, Form } from 'formik';
import { Input, InputProps } from './Input';

export default {
  component: Input,
  title: 'components/Input',
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Formik
    initialValues={{
      email: '',
    }}
    onSubmit={(values) => {}}
  >
    <Form>
      <Input {...args} />
    </Form>
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = { label: 'Email', name: 'email', placeholder: 'Email' };
