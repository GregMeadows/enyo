import { createContext } from 'react';
import { observable } from 'mobx';
import { Theme } from '@material-ui/core/styles';
import themes, { ThemeType } from '../themes';

interface settingsTypes {
  theme: string;
  themeType: ThemeType;
  pageTitle: string | null;
  pageSubtitle: JSX.Element | null;
}

const storeThemeType = localStorage.getItem(`settings.themeType`);
const savedThemeType =
  storeThemeType &&
  ThemeType[storeThemeType?.toUpperCase() as keyof typeof ThemeType];

const settings: settingsTypes = observable.object({
  theme: 'default',
  themeType: savedThemeType || ThemeType.LIGHT,
  pageTitle: null,
  pageSubtitle: null,
});

export function getTheme(): Theme {
  return themes[settings.theme][settings.themeType];
}

export function isLightMode(): boolean {
  return settings.themeType === ThemeType.LIGHT;
}

export function switchThemeType(): void {
  const newType = isLightMode() ? ThemeType.DARK : ThemeType.LIGHT;
  settings.themeType = newType;
  localStorage.setItem('settings.themeType', newType);
}

export function setPageTitle(title: string | null): void {
  settings.pageTitle = title;
}

export function setPageSubtitle(subtitle: JSX.Element | null): void {
  settings.pageSubtitle = subtitle;
}

export default createContext(settings);
