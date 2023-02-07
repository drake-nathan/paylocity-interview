import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  padding: 1em;
  border-top: 1px solid ${({ theme: { colors } }) => colors.textOffset};
`;
