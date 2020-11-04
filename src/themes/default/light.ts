import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import root from '../root';

const light = responsiveFontSizes(
  createMuiTheme(
    {
      palette: {
        type: 'light',
        primary: {
          main: '#401763',
        },
        background: {
          paper: '#ddd',
        },
        border: {
          light: '#eee',
          main: '#bbb',
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
