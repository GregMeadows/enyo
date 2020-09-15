import { createMuiTheme } from '@material-ui/core/styles';
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
