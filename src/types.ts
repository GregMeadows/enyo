export interface LinkedItem {
  text: string;
  link: string;
  fallbackIcon?: JSX.Element;
}

export interface KeyValue {
  [key: string]: string;
}

export interface FileWithDescription {
  file: File;
  description: string;
}

export type FormikValues = Record<string, unknown>;
