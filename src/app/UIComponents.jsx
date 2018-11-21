import React, { Fragment } from 'react';
import components from './components';

import DefaultPageLayout from './layout/DefaultPageLayout';

const formatPattern = Component => (
  <div key={Component.name}>
    <h2 id={Component.name}>{Component.name}</h2>
    <div className="grid-x">
      <div className="cell small-6 component-wrapper">
        <Component.component {...Component.props} />
      </div>
      <div className="cell small-6">
        <h5>Purpose</h5>
        <p>{Component.purpose}</p>
        <h5>Function</h5>
        <p>{Component.function}</p>
        <h5>Props</h5>
        <pre>
          {Component.props
            && Object.entries(Component.props).map(prop => `${prop[0]}: ${prop[1]}\n`)}
        </pre>
      </div>
    </div>
    <hr />
  </div>
);

const UIComponentsNav = () => (
  <Fragment>
    {components.map(component => (
      <li>
        <a href={`#${component.name}`}>{component.name}</a>
      </li>
    ))}
  </Fragment>
);

const UIComponentsContent = () => (
  <Fragment>{components.map(component => formatPattern(component))}</Fragment>
);

const UIComponents = () => (
  <DefaultPageLayout
    title="Franklin - UI Components"
    content={<UIComponentsContent />}
    sidebarContent={<UIComponentsNav />}
  />
);

export default UIComponents;
