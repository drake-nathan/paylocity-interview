import { type ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props): JSX.Element => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
