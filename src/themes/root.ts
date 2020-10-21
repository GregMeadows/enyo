import { ThemeOptions } from '@material-ui/core/styles';

const root: ThemeOptions = {
  typography: {
    h1: {
      fontFamily: [
        '"Cairo"',
        '"Roboto"',
        '"Helvetica"',
        '"Arial"',
        'sans-serif',
      ].join(','),
    },
    body1: {
      fontSize: '1.1rem',
    },
    h4: {
      fontSize: '1.8rem',
    },
  },
};

export default root;

// Extend MUI Palette
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    border: {
      light: string;
      main: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    border: {
      light: string;
      main: string;
      dark: string;
    };
  }
}
