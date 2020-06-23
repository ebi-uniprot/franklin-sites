import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Chip } from '../src/components';

export default {
  title: 'Core|Chip',
  parameters: {
    purposeFunction: {
      function: 'Can be used to make selections or trigger actions',
      purpose: 'Display compact discrete information',
    },
  },
};

export const chips = () => (
  <Fragment>
    <div>
      <Chip>Primary</Chip>
    </div>
    <div>
      <Chip className="secondary">Secondary</Chip>
    </div>
  </Fragment>
);

export const disabled = () => (
  <Fragment>
    <div>
      <Chip disabled>Primary</Chip>
    </div>
    <div>
      <Chip className="secondary" disabled>
        Secondary
      </Chip>
    </div>
  </Fragment>
);

export const removable = () => (
  <Fragment>
    <div>
      <Chip onRemove={action('Remove chip')}>Primary</Chip>
    </div>
    <div>
      <Chip onRemove={action('Remove chip')} className="secondary">
        Secondary
      </Chip>
    </div>
  </Fragment>
);

export const compact = () => (
  <Fragment>
    <div>
      <Chip compact>Primary</Chip>
    </div>
    <div>
      <Chip compact className="secondary">
        Secondary
      </Chip>
    </div>
  </Fragment>
);
