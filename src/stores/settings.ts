import { createContext } from 'react';
import { observable } from 'mobx';
import { Theme } from '@material-ui/core/styles';
import themes, { ThemeType } from '../themes';

const settings = observable.object({
  theme: themes.default,
  themeType: ThemeType.LIGHT,
});

export function getTheme(): Theme {
  return settings.theme[settings.themeType];
}

export function isLightMode(): boolean {
  return settings.themeType === ThemeType.LIGHT;
}

export function switchThemeType(): void {
  settings.themeType = isLightMode() ? ThemeType.DARK : ThemeType.LIGHT;
}

export default createContext(settings);
