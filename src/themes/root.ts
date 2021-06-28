import { ThemeOptions } from '@material-ui/core/styles';

const root: ThemeOptions = {
  props: {
    MuiLink: {
      underline: 'always',
    },
  },
  typography: {
    h1: {
      fontFamily: [
        '"Enyo"',
        '"Roboto"',
        '"Helvetica"',
        '"Arial"',
        'sans-serif',
      ].join(','),
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    h2: {
      marginTop: '2rem',
      fontSize: '2.1rem',
    },
    h3: {
      marginTop: '1.6rem',
      fontSize: '1.75rem',
    },
    h4: {
      marginTop: '0.8rem',
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '2rem',
      fontFamily: [
        '"Enyo"',
        '"Roboto"',
        '"Helvetica"',
        '"Arial"',
        'sans-serif',
      ].join(','),
      textTransform: 'uppercase',
      letterSpacing: 0.6,
    },
    h6: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1.09rem',
    },
    body2: {
      fontSize: '1rem',
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
