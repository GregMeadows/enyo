import { createMuiTheme } from '@material-ui/core/styles';
import root from '../root';

const light = createMuiTheme(
  {
    palette: {
      type: 'light',
      border: {
        light: '#eee',
        dark: '#444',
      },
    },
  },
  root
);

export default light;
