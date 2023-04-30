import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 20px 0;

  background-color: #fee5c5;
`;

export const FieldElement = styled(Field)`
  display: block;
  width: 250px;

  margin-bottom: 10px;
`;

export const ErrorMessageElement = styled(ErrorMessage)`
  margin-bottom: 20px;
  font-weight: 300;
  color: #ff0000;
`;

export const FieldTitle = styled.label`
  margin-top: 0;
  margin-bottom: 5px;
`;

export const AddBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
`;
