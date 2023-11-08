import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 350px;
  padding: ${p => p.theme.spacing(1)};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${p => p.theme.spacing(1)};
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 4px;
`;
