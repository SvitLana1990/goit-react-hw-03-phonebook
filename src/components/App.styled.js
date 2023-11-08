import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  padding: ${p => p.theme.spacing(4)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  background-color: rgba(0, 0, 70, 0.3);
  border-radius: 8px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.blue};
`;

export const TitleContacts = styled.h2`
  color: ${p => p.theme.colors.blue};
`;
