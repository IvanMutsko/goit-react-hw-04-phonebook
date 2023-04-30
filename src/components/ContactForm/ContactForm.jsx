import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormElement,
  FieldElement,
  FieldTitle,
  ErrorMessageElement,
  AddBtn,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required(),
  number: yup
    .string()
    .matches(/^[0-9]{7}$/, 'Must be exactly 7 digits')
    .required(),
});

const initialValues = { name: '', number: '' };

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = evt => {
    const { name, number } = evt.currentTarget;

    this.setState({ name: name.value, number: number.value });
  };

  onSubmitForm = (values, { resetForm }) => {
    this.props.onAddContact(this.state);

    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.onSubmitForm}
      >
        <FormElement autoComplete="off" onChange={this.onChangeInput}>
          <FieldTitle htmlFor="name-input">Name</FieldTitle>
          <FieldElement id="name-input" type="text" name="name" />
          <ErrorMessageElement name="name" component="div" />
          <FieldTitle htmlFor="number-input">Number</FieldTitle>
          <FieldElement id="number-input" type="tel" name="number" />
          <ErrorMessageElement name="number" component="div" />
          <AddBtn type="submit">Add contact</AddBtn>
        </FormElement>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
