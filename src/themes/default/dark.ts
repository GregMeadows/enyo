import { createMuiTheme } from '@material-ui/core/styles';
import root from '../root';

const dark = createMuiTheme(
  {
    palette: {
      type: 'dark',
      primary: {
        main: '#720f80',
      },
      border: {
        light: '#eee',
        dark: '#444',
      },
    },
  },
  root
);

export default dark;
