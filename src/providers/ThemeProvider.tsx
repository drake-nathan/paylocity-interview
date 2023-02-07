import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useWindowSize } from '../hooks/useWindowSize';
import { theme } from '../styles/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const { windowWidth } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth <= 775) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  return (
    <StyledThemeProvider theme={{ ...theme, isMobile }}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
