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
        {/* Disabling until we find a better way to show this */}
        {/* <h5>Props</h5>
        <div>
          {Component.props
            && Object.entries(Component.props).map(prop => (
              <div key={prop[0]}>
                <strong>{prop[0]}</strong>
:
                {JSON.stringify(prop[1])}
              </div>
            ))}
        </div> */}
      </div>
    </div>
    <hr />
  </div>
);

const UIComponentsNav = () => (
  <Fragment>
    {components.map((component, index) => {
      const key = `id_${component.name}_${index}`;
      return (
        <li key={key}>
          <a href={`#${component.name}`}>{component.name}</a>
        </li>
      );
    })}
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
