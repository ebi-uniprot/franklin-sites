import {
  useRef,
  useState,
  useEffect,
  useMemo,
  ReactNode,
  ReactElement,
  Dispatch,
  SetStateAction,
  HTMLAttributes,
  useCallback,
  Fragment,
} from 'react';
import cn from 'classnames';

import Button, { ButtonProps } from './button';

import '../styles/components/dropdown.scss';

export type DropdownButtonProps = {
  /**
   * Content revealed on click.
   */
  children:
    | ReactNode
    | ((showMenu: Dispatch<SetStateAction<boolean>>) => ReactNode);
  /**
   * Label to be display by the button
   */
  label: ReactNode;
  /**
   * Open on pointer over (useful for dropdowns in header)
   */
  openOnHover?: boolean;
} & ButtonProps;

// Keep it around for now as it's still used in TreeSelect
/** @deprecated */
const DropdownButton = ({
  children,
  label,
  className,
  openOnHover = false,
  ...props
}: DropdownButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [size, setSize] = useState<DOMRect>();

  const ref = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const childType = typeof children;

  // effect to handle a click on anything closing the dropdown
  useEffect(() => {
    if (!showMenu) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current?.parentElement?.contains(event.target as Node) ||
        (childType === 'function' &&
          dropdownRef.current?.contains(event.target as Node))
      ) {
        return;
      }
      setShowMenu(false);
    };

    window.document.addEventListener('mouseup', listener);
    window.document.addEventListener('touchend', listener);
    // eslint-disable-next-line consistent-return
    return () => {
      window.document.removeEventListener('mouseup', listener);
      window.document.removeEventListener('touchend', listener);
    };
  }, [showMenu, childType]);

  useEffect(() => {
    if (ref.current && showMenu) {
      setSize(ref.current.getBoundingClientRect());
    }
  }, [showMenu]);

  const style = useMemo(() => {
    if (!size) {
      return undefined;
    }
    const availableHeight = window.innerHeight - size.bottom;
    return { top: size.height, maxHeight: availableHeight };
  }, [size]);

  return (
    <div
      className="dropdown-container"
      // TODO: This code has been commented out as part of https://www.ebi.ac.uk/panda/jira/browse/TRM-25862
      // Because Safari doesn't focus when clicking on a button: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
      // a jira has been made https://www.ebi.ac.uk/panda/jira/browse/TRM-26188 to investigate and implement ways to deal with this.
      // Will leave the code here has a marker for that task.
      // onBlur={(e) =>
      //   setShowMenu(e.currentTarget.contains(e.relatedTarget as Node))
      // }
      onPointerEnter={openOnHover ? () => setShowMenu(true) : undefined}
      onPointerLeave={openOnHover ? () => setShowMenu(false) : undefined}
    >
      <Button
        className={cn('dropdown', className)}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        ref={ref}
        {...props}
      >
        {label}
      </Button>
      <div
        className={cn('dropdown-menu', {
          'dropdown-menu-open': showMenu,
        })}
        ref={dropdownRef}
        style={style}
      >
        {showMenu &&
          (typeof children === 'function' ? children(setShowMenu) : children)}
      </div>
    </div>
  );
};

type ControlledDropdownProps = {
  /**
   * Element always visible used to open and close the dropdown
   */
  visibleElement: ReactElement;
  /**
   * Whether the dropdown is open or closed
   */
  expanded: boolean;
};

export const ControlledDropdown = ({
  visibleElement,
  expanded,
  children,
  className,
  'aria-haspopup': ariaHaspopup,
  ...props
}: ControlledDropdownProps & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(className, 'dropdown')}
    {...props}
    aria-expanded={expanded}
    aria-haspopup={ariaHaspopup || true}
  >
    {/* Not sure why fragments and keys are needed, but otherwise gets the
    React key warnings messages and children are rendered as array... */}
    <Fragment key="visible">{visibleElement}</Fragment>
    <Fragment key="content">
      {expanded && <div className="dropdown__content">{children}</div>}
    </Fragment>
  </div>
);

type DropdownProps = {
  /**
   * Prop that, when it changes, will cause the dropdown to close
   */
  propChangeToClose?: unknown;
  /**
   * Render for element always visible used to open and close the dropdown
   */
  visibleElement: (onClick: () => unknown) => ReactElement;
  /**
   * Close if a clickable element within is clicked
   */
  children: ReactNode | ((closeDropdown: () => unknown) => ReactNode);
};

export const Dropdown = ({
  visibleElement,
  propChangeToClose,
  className,
  'aria-haspopup': ariaHaspopup,
  children,
  ...props
}: Omit<ControlledDropdownProps, 'expanded' | 'visibleElement'> &
  DropdownProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'children'>) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setExpanded(false), []);

  // Effect in order to close the dropdown when the corresponding prop changes
  useEffect(() => {
    close();
  }, [close, propChangeToClose]);

  // effect to handle a click on anything closing the dropdown
  useEffect(() => {
    if (!expanded) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        (event.target && ref.current?.contains(event.target as Node))
      ) {
        return;
      }
      close();
    };

    window.document.addEventListener('mouseup', listener, { passive: true });
    window.document.addEventListener('touchend', listener, { passive: true });
    // eslint-disable-next-line consistent-return
    return () => {
      window.document.removeEventListener('mouseup', listener);
      window.document.removeEventListener('touchend', listener);
    };
  }, [close, expanded]);

  const handleClick = useCallback(
    () => setExpanded((expanded) => !expanded),
    []
  );

  return (
    <div
      className={cn(className, 'dropdown')}
      {...props}
      aria-expanded={expanded}
      aria-haspopup={ariaHaspopup || true}
      ref={ref}
    >
      {/* Not sure why fragments and keys are needed, but otherwise gets the
      React key warnings messages and children are rendered as array... */}
      <Fragment key="visible">{visibleElement(handleClick)}</Fragment>
      <Fragment key="content">
        {expanded && (
          <div className="dropdown__content">
            {typeof children === 'function' ? children(close) : children}
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default DropdownButton;
