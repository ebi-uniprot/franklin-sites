import {
  useState,
  useCallback,
  Children,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useId,
} from 'react';
import cn from 'classnames';
import type { Except } from 'type-fest';

import '../styles/components/tabs.scss';

type TabProps = {
  /**
   * Title of that tab
   */
  title: ReactNode;
  /**
   * Optional ID for that tab, one of the expected options for the parent <Tabs> component
   */
  id?: string;
  /**
   * Content of that tab
   */
  children?: ReactNode;
  /**
   * Choose that tab as the default to be displayed
   */
  defaultSelected?: boolean;
  /**
   * Option to render and hide tab (display:none) rather than remove from the DOM
   */
  cache?: boolean;
  /**
   * Option to disable selection of tab
   */
  disabled?: boolean;
} & Except<HTMLAttributes<HTMLDivElement>, 'title' | 'id'>;

// This is just a configuration component, it doesn't need to render anything as
// it will be used by a <Tabs> component
export const Tab = (_: TabProps) => null;

type TabsProps = {
  /**
   * <Tab> elements defining the content and title of each tab
   */
  children:
    | Array<ReactElement<TabProps> | null>
    | ReactElement<TabProps>
    | null;
  /**
   * Optional way of controling the tabs from the outside of this component by
   * assigning here a value corresponding to an 'id' prop of one of the child
   * <Tab>
   */
  active?: string | number;
  /**
   * Optional bordered styling of tab headers
   */
  bordered?: boolean;
} & Except<HTMLAttributes<HTMLDivElement>, 'children'>;

export const Tabs = ({
  children,
  active,
  className,
  bordered = false,
  ...props
}: TabsProps) => {
  const tabId = useId();

  const isManaged = typeof active !== 'undefined';

  // create an array of tab description objects out of the children's props
  const childrenArray = Children.toArray(children).filter(Boolean) as Array<
    ReactElement<TabProps>
  >;
  const tabs = childrenArray.map(({ props: { id, ...props } }, index) => ({
    // set a default value for id depending on their index if needed
    id: id === undefined ? `${index}` : id,
    // and get the rest of the props as they are
    ...props,
  }));

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
    (event: MouseEvent | KeyboardEvent) => {
      if (isManaged || !(event.currentTarget instanceof HTMLElement)) {
        return;
      }

      const { target } = event.currentTarget.dataset;
      // mouse click event, or if keyboard event, restrict to 'Enter' and spacebar keys
      if (
        event &&
        target !== undefined &&
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

  let content;
  const hasCacheTab = tabs.some(({ cache }) => cache);
  if (hasCacheTab) {
    content = tabs.map((tab) => {
      const selected = tab.id === selectedTab.id;
      return (
        (tab.cache || selected) && (
          <div key={tab.id} style={{ display: selected ? 'block' : 'none' }}>
            {tab.children}
          </div>
        )
      );
    });
  } else {
    content = selectedTab.children;
  }

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
    <div className={cn('tabs', className)} {...props}>
      <div className="tabs__header" role="tablist">
        {tabs.map(
          ({
            title,
            id,
            className,
            disabled = false,
            children: _,
            defaultSelected: __,
            cache: ___,
            ...props
          }) =>
            title && (
              <div
                key={id}
                data-testid="tab-title"
                data-target={id}
                role="tab"
                aria-controls={tabId}
                className={cn(
                  'tabs__header__item',
                  {
                    'tabs__header__item--bordered': bordered,
                    'tabs__header__item--disabled': disabled,
                    'tabs__header__item--active': id === activeFromPropsOrState,
                  },
                  className
                )}
                aria-disabled={disabled ? true : undefined}
                {...(disabled ? {} : unmanagedProps)}
                {...props}
              >
                {title}
              </div>
            )
        )}
      </div>
      <div role="tabpanel" id={tabId} data-testid="tab-content">
        {content}
      </div>
    </div>
  );
};
