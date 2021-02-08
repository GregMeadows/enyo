export interface LinkedItem {
  text: string;
  link: string;
  fallbackIcon?: JSX.Element;
}

export interface KeyValue {
  [key: string]: string;
}

export interface KeyElement {
  [key: string]: JSX.Element;
}
