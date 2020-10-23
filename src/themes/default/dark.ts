import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import root from '../root';

const dark = responsiveFontSizes(
  createMuiTheme(
    {
      palette: {
        type: 'dark',
        primary: {
          main: '#944be3',
        },
        border: {
          light: '#444',
          main: '#999',
          dark: '#eee',
        },
      },
    },
    root
  )
);

export default dark;
