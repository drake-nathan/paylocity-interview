import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    isMobile?: boolean;
    colors: {
      bgMain: string;
      bgOffset: string;
      textMain: string;
      textOffset: string;
    };
  }
}
