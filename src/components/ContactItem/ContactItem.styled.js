import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 100px;
  margin-left: auto;
  padding: ${p => p.theme.spacing(1)};
  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 4px;
  color: ${p => p.theme.colors.red};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.red};
    border: 2px solid ${p => p.theme.colors.red};
  }
`;

export const ContactInfo = styled.span`
  background: ${p => p.theme.colors.blue};
  padding: ${p => p.theme.spacing(1)};
  border-radius: 4px;
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
`;
