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
        border: {
          light: '#eee',
          main: '#999',
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
