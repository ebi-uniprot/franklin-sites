import React, { useState, useCallback, useRef, Children } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';

import '../styles/components/tabs.scss';

// This is just a configuration component, it doesn't need to render anything as
// it will be used by a <Tabs> component
export const Tab = () => null;
Tab.propTypes = {
  /**
   * Title of that tab
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * Optional ID for that tab, one of the expected options for the parent <Tabs> component
   */
  id: PropTypes.string,
  /**
   * Content of that tab
   */
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  /**
   * Choose that tab as the default to be displayed
   */
  defaultSelected: PropTypes.bool,
  /**
   * Optional className to be passed to the title of the tab
   */
  className: PropTypes.string,
  /**
   * Optional extra props to pass to the title of the tab
   */
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/require-default-props
};

const tabType = PropTypes.shape({
  type: PropTypes.oneOf([Tab]),
});

export const Tabs = ({ children, active, className, ...props }) => {
  const idRef = useRef(v1());

  const isManaged = typeof active !== 'undefined';

  // create an array of tab description objects out of the children's props
  const tabs = Children.toArray(children).map(
    // eslint-disable-next-line no-shadow
    ({ props: { id, ...props } }, index) => ({
      // set a default value for id depending on their index if needed
      id: typeof id === 'undefined' ? `${index}` : id,
      // and get the rest of the props as they are
      ...props,
    })
  );

  // state to use to decide which tab to render if this component is not managed
  const [selectedState, setSelectedState] = useState(() => {
    if (isManaged) {
      return active;
    }
    const defaultSelected = tabs.filter((tab) => tab.defaultSelected);
    if (defaultSelected.length) {
      if (defaultSelected.length > 1) {
        // eslint-disable-next-line no-console
        console.warn(
          `a <Tabs> component has been rendered with ${defaultSelected.length} <Tab defaultSelected> children. There should be a maximum of 1 default selected child.`
        );
      }
      return defaultSelected[0].id;
    }
    return tabs[0].id;
  });

  const handleClick = useCallback(
    (event) => {
      if (isManaged) {
        return;
      }

      const { target } = event.currentTarget.dataset;
      // mouse click event, or if keyboard event, restrict to 'Enter' and spacebar keys
      if (
        event &&
        (!('key' in event) || event.key === 'Enter' || event.key === ' ')
      ) {
        setSelectedState(target);
      }
    },
    [isManaged]
  );

  const activeFromPropsOrState = isManaged ? active : selectedState;

  const selectedTab = tabs.find((tab) => tab.id === activeFromPropsOrState);
  if (!selectedTab) {
    throw new Error(`Could not find a tab with the id: "${selectedState}"`);
  }
  const content = selectedTab.children;

  let unmanagedProps = {};
  // add event listeners in case this is not an externally managed component
  if (!isManaged) {
    unmanagedProps = {
      onClick: handleClick,
      onKeyPress: handleClick,
      tabIndex: 0,
    };
  }

  return (
    <div className={`tabs${className ? ` ${className}` : ''}`} {...props}>
      <div className="tabs__header" role="tablist">
        {tabs.map(
          ({
            title,
            id,
            className, // eslint-disable-line no-shadow
            children: _,
            defaultSelected: __,
            ...props // eslint-disable-line no-shadow
          }) => (
            <div
              key={id}
              data-testid="tab-title"
              data-target={id}
              role="tab"
              aria-controls={idRef.current}
              className={`tabs__header__item${
                id === activeFromPropsOrState
                  ? ' tabs__header__item--active'
                  : ''
              }${className ? ` ${className}` : ''}`}
              {...unmanagedProps}
              {...props}
            >
              {title}
            </div>
          )
        )}
      </div>
      <div role="tabpanel" id={idRef.current} data-testid="tab-content">
        {content}
      </div>
    </div>
  );
};
Tabs.propTypes = {
  /**
   * <Tab> elements defining the content and title of each tab
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(tabType), tabType])
    .isRequired,
  /**
   * Optional way of controling the tabs from the outside of this component by
   * assigning here a value corresponding to an 'id' prop of one of the child
   * <Tab>
   */
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Optional className to be passed to the container of the tabs
   */
  className: PropTypes.string,
  /**
   * Optional extra props to pass to the container of the tabs
   */
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/require-default-props
};
Tabs.defaultProps = {
  active: undefined,
  className: undefined,
};
