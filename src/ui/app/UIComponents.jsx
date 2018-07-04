import React, { Fragment } from 'react';
import components from '../components/components';

import DefaultPageLayout from '../layout/DefaultPageLayout';

const formatPattern = Component => (
  <div key={Component.name}>
    <h2>{Component.name}</h2>
    <div className="grid-x">
      <div className="cell small-6 component-wrapper">
        <Component.component {...Component.props} />
      </div>
      <div className="cell small-6">
        <h5>Purpose</h5>
        <p>{Component.purpose}</p>
        <h5>Function</h5>
        <p>{Component.function}</p>
      </div>
    </div>
    <hr />
  </div>
);

const UIComponentsContent = () => (
  <Fragment>{components.map(component => formatPattern(component))}</Fragment>
);

const UIComponents = () => (
  <DefaultPageLayout title="Franklin - UI Components" content={<UIComponentsContent />} />
);

export default UIComponents;
