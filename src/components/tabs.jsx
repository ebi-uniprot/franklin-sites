import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Children,
} from 'react';
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /**
   * Choose that tab as the default to be displayed
   */
  defaultSelected: PropTypes.bool,
};

const tabType = PropTypes.shape({
  type: PropTypes.oneOf([Tab]),
});

export const Tabs = ({ children, active }) => {
  const idRef = useRef(v1());

  const isManaged = typeof active !== 'undefined';

  const tabs = Children.toArray(children).map((child, index) => ({
    title: child.props.title,
    id: typeof child.props.id === 'undefined' ? `${index}` : child.props.id,
    children: child.props.children,
    defaultSelected: child.props.defaultSelected,
  }));

  const [selectedState, setSelectedState] = useState(() => {
    if (isManaged) {
      return active;
    }
    const defaultSelected = tabs.filter(tab => tab.defaultSelected);
    if (defaultSelected.length) {
      if (defaultSelected.length > 1) {
        // eslint-disable-next-line no-console
        console.warn(
          `a <Tabs> component has been rendered with ${defaultSelected.length} <Tab defaultSelected> children. There should be a maximum of 1 default selected child.`
        );
      }
      return defaultSelected[0].id;
    }
    return '0';
  });

  useEffect(() => {
    if (isManaged) {
      setSelectedState(active);
    }
  }, [active, isManaged]);

  const handleClick = useCallback(
    event => {
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

  const selectedTab = tabs.find(tab => tab.id === selectedState);
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
    <>
      <div className="tabs">
        <div className="tabs__header" role="tablist">
          {tabs.map(({ title, id }) => (
            <div
              key={id}
              data-testid="tab-title"
              data-target={id}
              role="tab"
              aria-controls={idRef.current}
              className={`tabs__header__item${
                id === selectedState ? ' tabs__header__item--active' : ''
              }`}
              {...unmanagedProps}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
      <div role="tabpanel" id={idRef.current} data-testid="tab-content">
        {content}
      </div>
    </>
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
};
Tabs.defaultProps = {
  active: undefined,
};
