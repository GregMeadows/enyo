import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import root from '../root';

const light = responsiveFontSizes(
  createMuiTheme(
    {
      palette: {
        type: 'light',
        primary: {
          main: '#412D5D',
        },
        secondary: {
          main: '#009696',
        },
        background: {
          paper: '#f6f6f6',
        },
        border: {
          light: '#e8e8e8',
          main: '#ddd',
          dark: '#444',
        },
        text: {
          primary: '#000',
        },
      },
    },
    root
  )
);

export default light;
