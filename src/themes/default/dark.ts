import { createMuiTheme } from '@material-ui/core/styles';
import root from '../root';

const dark = createMuiTheme(
  {
    palette: {
      type: 'dark',
      border: {
        light: '#444',
        dark: '#eee',
      },
    },
  },
  root
);

export default dark;
