import { ThemeOptions } from '@material-ui/core/styles';

const root: ThemeOptions = {
  overrides: {
    MuiTypography: {
      body1: {
        marginTop: '1rem',
      },
    },
  },
};

export default root;

// Extend MUI Palette
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    border: string;
  }
  interface PaletteOptions {
    border: string;
  }
}
