import { Meta, Story } from '@storybook/react';
import { Formik, Form } from 'formik';
import { TextField, InputProps } from './component';

export default {
  component: TextField,
  title: 'form/TextField',
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Formik
    initialValues={{
      email: '',
    }}
    onSubmit={(values) => {}}
  >
    <Form>
      <TextField {...args} />
    </Form>
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = { label: 'Email', name: 'email', placeholder: 'Email' };
