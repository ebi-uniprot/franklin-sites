import React from 'react';

import { Button } from '../src/components';
import { DownloadIcon } from '../src/components';

export default {
  title: 'Forms/Button',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const buttons = () => (
  <>
    <div>
      <button className="button" type="button">
        Primary
      </button>
    </div>
    <div>
      <button className="button secondary" type="button">
        Secondary
      </button>
    </div>
    <div>
      <button className="button tertiary" type="button">
        Tertiary
      </button>
    </div>
    <div>
      <Button type="button">Primary</Button>
    </div>
    <div>
      <Button className="button secondary" type="button">
        Secondary
      </Button>
    </div>
    <div>
      <Button className="button tertiary" type="button">
        Tertiary
      </Button>
    </div>
  </>
);

export const buttonGroups = () => (
  <>
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
    <div className="button-group">
      <button className="button secondary" type="button">
        One
      </button>
      <button className="button secondary" type="button">
        Two
      </button>
      <button className="button secondary" type="button">
        Three
      </button>
    </div>
    <div className="button-group">
      <button className="button tertiary" type="button">
        One
      </button>
      <button className="button tertiary" type="button">
        Two
      </button>
      <button className="button tertiary" type="button">
        Three
      </button>
    </div>
  </>
);

export const disabled = () => (
  <>
    <div>
      <button className="button disabled" type="button" disabled>
        Primary
      </button>
    </div>
    <div>
      <button className="button secondary disabled" type="button" disabled>
        Secondary
      </button>
    </div>
    <div>
      <button className="button tertiary disabled" type="button" disabled>
        Tertiary
      </button>
    </div>
  </>
);

export const withIcon = () => (
  <>
    <div>
      <button className="button" type="button">
        <DownloadIcon />
        Primary
      </button>
    </div>
    <div>
      <button className="button secondary" type="button">
        <DownloadIcon />
        Secondary
      </button>
    </div>
    <div>
      <button className="button tertiary" type="button">
        <DownloadIcon />
        Tertiary
      </button>
    </div>
  </>
);
