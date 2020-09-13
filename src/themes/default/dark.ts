import { createMuiTheme } from '@material-ui/core';
import root from '../root';

const dark = createMuiTheme(
  {
    palette: {
      type: 'dark',
    },
  },
  root
);

export default dark;
