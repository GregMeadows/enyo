import { ThemeOptions } from '@material-ui/core/styles';

const root: ThemeOptions = {
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.8rem',
      },
    },
  },
};

export default root;

// Extend MUI Palette
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    border: {
      light: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    border: {
      light: string;
      dark: string;
    };
  }
}
