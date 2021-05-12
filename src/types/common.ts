import { CSSProperties } from 'react';

export type HeadingLevels = `h${1 | 2 | 3 | 4 | 5 | 6}`;
export interface FranklinStyle extends CSSProperties {
  '--main-button-color': string;
}
