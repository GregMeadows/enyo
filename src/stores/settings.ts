import { createContext } from 'react';
import { observable } from 'mobx';
import { Theme } from '@material-ui/core/styles';
import themes, { ThemeType } from '../themes';

interface settingsTypes {
  theme: string;
  themeType: ThemeType;
}

const settings: settingsTypes = observable.object({
  theme: 'default',
  themeType: ThemeType.LIGHT,
});

export function getTheme(): Theme {
  return themes[settings.theme][settings.themeType];
}

export function isLightMode(): boolean {
  return settings.themeType === ThemeType.LIGHT;
}

export function switchThemeType(): void {
  settings.themeType = isLightMode() ? ThemeType.DARK : ThemeType.LIGHT;
}

export default createContext(settings);
