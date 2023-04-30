import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 10px 0;

  background-color: #fee5c5;
`;

export const FieldTitle = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
`;

export const FieldElement = styled(Field)`
  display: block;
  width: 250px;

  margin-bottom: 10px;
`;
