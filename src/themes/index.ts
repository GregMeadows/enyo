import { Theme } from '@material-ui/core/styles';
import light from './default/light';
import dark from './default/dark';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemePair {
  light: Theme;
  dark: Theme;
}

interface themesType {
  [key: string]: ThemePair;
}

const themes: themesType = {
  default: {
    light,
    dark,
  },
};

export default themes;
