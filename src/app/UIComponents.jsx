import React, { Fragment } from 'react';
import components from './components';
import docJson from '../../doc/doc.json';

import DefaultPageLayout from './layout/DefaultPageLayout';

const formatPattern = (Component) => {
  const doc = Object.values(docJson).find(
    componentDoc => componentDoc.displayName === Component.component.name,
  );
  return (
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
          <ul className="no-bullet">
            {doc
              && doc.props
              && Object.keys(doc.props).map(prop => (
                <li key={prop}>
                  <strong>{prop}</strong>
                  {' '}
                  <em>
                    {doc.props[prop].type.name}
                    {!doc.props[prop].required && ' (optional)'}
                  </em>
                  <p>{doc.props[prop].description && doc.props[prop].description}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

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
