import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const UserAddSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'xxx-xx-xx')
    .required('Required!'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserAddSchema}
    >
      <Form className={css.container}>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={css.error} component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" id={numberFieldId} />
          <ErrorMessage name="number" className={css.error} component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
