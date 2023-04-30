import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormElement, FieldElement, FieldTitle } from './Filter.styled';

const Filter = ({ onChangeFilterInput }) => {
  return (
    <Formik>
      <FormElement>
        <FieldTitle>Find contacts by name</FieldTitle>
        <FieldElement name="filter" onChange={onChangeFilterInput} />
      </FormElement>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeFilterInput: PropTypes.func.isRequired,
};
