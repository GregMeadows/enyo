import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import root from '../root';

const dark = responsiveFontSizes(
  createMuiTheme(
    {
      palette: {
        type: 'dark',
        primary: {
          main: '#009696',
        },
        secondary: {
          main: '#412D5D',
        },
        border: {
          light: '#444',
          main: '#666',
          dark: '#eee',
        },
      },
    },
    root
  )
);

export default dark;
