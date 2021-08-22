import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      black: string;
      darkBlack: string;
      gray: string;
      white: string;
      background: string;
    };
    typography: {
      heading: string;
      subheading: string;
      body: string;
      caption: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      xl: string;
      xxl: string;
    };
  }
}
