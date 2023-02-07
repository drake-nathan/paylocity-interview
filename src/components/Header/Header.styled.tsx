import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textOffset};
`;

export const Title = styled.h1``;

export const Button = styled.button`
  padding: 0.25em 0.5em;
  font-size: 1.5rem;
  background-color: ${({ theme: { colors } }) => colors.bgMain};
  color: ${({ theme: { colors } }) => colors.textMain};
  border: 2px solid ${({ theme: { colors } }) => colors.textMain};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  :hover {
    background-color: ${({ theme: { colors } }) => colors.bgOffset};
    cursor: pointer;
  }
`;
