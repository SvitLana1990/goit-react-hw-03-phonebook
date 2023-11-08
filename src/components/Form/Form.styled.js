import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
`;

export const Field = styled(FormikField)`
  width: 250px;
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  &:hover {
    color: ${p => p.theme.colors.blue};
  }
`;

export const Button = styled.button`
  width: 150px;
  padding: ${p => p.theme.spacing(1)};
  background: ${p => p.theme.colors.blue};
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 4px;
  color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
    background: ${p => p.theme.colors.white};
  }
`;
