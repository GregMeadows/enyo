import { Theme } from '@material-ui/core/styles';
import light from './default/light';
import dark from './default/dark';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

interface themesType {
  [key: string]: {
    light: Theme;
    dark: Theme;
  };
}

const themes: themesType = {
  default: {
    light,
    dark,
  },
};

export default themes;
