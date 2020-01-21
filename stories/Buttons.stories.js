import React, { Fragment } from 'react';
import { DownloadIcon } from '../src/components';

export default {
  title: 'Forms|Button',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const buttons = () => (
  <Fragment>
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
  </Fragment>
);

export const buttonGroups = () => (
  <Fragment>
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
  </Fragment>
);

export const disabled = () => (
  <Fragment>
    <div>
      <button className="button disabled" type="button">
        Primary
      </button>
    </div>
    <div>
      <button className="button secondary disabled" type="button">
        Secondary
      </button>
    </div>
    <div>
      <button className="button tertiary disabled" type="button">
        Tertiary
      </button>
    </div>
  </Fragment>
);

export const withIcon = () => (
  <Fragment>
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
  </Fragment>
);
