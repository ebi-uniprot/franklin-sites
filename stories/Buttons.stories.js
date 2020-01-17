import React from 'react';
import { DownloadIcon } from '../src/components';

export default {
  title: 'Atoms|Button',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const primary = () => (
  <button className="button" type="button">
    Primary
  </button>
);

export const secondary = () => (
  <button className="button secondary" type="button">
    Secondary
  </button>
);

export const tertiary = () => (
  <button className="button tertiary" type="button">
    Tertiary
  </button>
);

export const tertiaryWithIcon = () => (
  <button className="button tertiary" type="button">
    <DownloadIcon />
    Tertiary
  </button>
);

export const buttonGroup = () => (
  <div className="button-group">
    <button className="button" type="button">
      One
    </button>
    <button className="button" type="button">
      Two
    </button>
    <button className="button" type="button">
      Three
    </button>
  </div>
);

export const disabledButton = () => (
  <button className="button disabled" type="button">
    One
  </button>
);

export const primaryWithIcon = () => (
  <button className="button" type="button">
    <DownloadIcon />
    Download
  </button>
);
