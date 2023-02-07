import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${({ theme: { colors } }) => colors.textMain};
  background-color: ${({ theme: { colors } }) => colors.bgMain};
`;
