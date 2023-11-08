import { Formik } from 'formik';
import { Form, ErrorMessage, Field, Button, Label } from './Form.styled';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Label htmlFor="name">
            NAME&nbsp;&nbsp;&nbsp;&nbsp;
            <Field type="text" id="name" name="name" placeholder="Write name" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label htmlFor="number">
            Number&nbsp;
            <Field
              type="tel"
              id="number"
              name="number"
              placeholder="Write number"
            />
            <ErrorMessage name="number" component="span" />
          </Label>
          <Button type="submit" style={{ margin: '0 auto' }}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
