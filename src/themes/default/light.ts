import { createMuiTheme } from '@material-ui/core';
import root from '../root';

const light = createMuiTheme(
  {
    palette: {
      type: 'light',
    },
  },
  root
);

export default light;
