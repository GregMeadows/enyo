import { createMuiTheme } from '@material-ui/core/styles';
import root from '../root';

const dark = createMuiTheme(
  {
    palette: {
      type: 'dark',
      border: '#444',
    },
  },
  root
);

export default dark;
