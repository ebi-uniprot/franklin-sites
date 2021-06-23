import {
  useRef,
  useState,
  useEffect,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import cn from 'classnames';

import Button from './button';

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
   * Additional CSS classnames to apply to button
   */
  className?: string;
  /**
   * Button variant to use
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * open on pointer over (useful for dropdowns in header)
   */
  openOnHover?: boolean;
};

const DropdownButton = ({
  children,
  label,
  variant,
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
        variant={variant}
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

export default DropdownButton;
