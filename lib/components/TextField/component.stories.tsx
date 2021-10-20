import { Meta, Story } from '@storybook/react';
import { Formik, Form } from 'formik';
import { TextField, TextFieldProps } from './component';

export default {
  component: TextField,
  title: 'form/Text Field',
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
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
Primary.args = {
  label: 'Email',
  name: 'email',
  placeholder: 'Email',
};
