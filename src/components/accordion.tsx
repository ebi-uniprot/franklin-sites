import { useState, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import Bubble from './bubble';

import '../styles/components/accordion.scss';

import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

const chevronSize = 16;

type Props = {
  /**
   * The title, works as a trigger to open/close
   */
  accordionTitle: ReactNode;
  /**
   * Number displayed at the right of the accordion. This could, for example, be used to inform
     the user how many checkboxes have selected in the accodion's hidden content.
   */
  count?: number;
  /**
   * Disable toggling and always open accordion
   */
  alwaysOpen?: boolean;
  /**
   * Initial state of the component
   */
  initialOpen?: boolean;
  /**
   * React children
   */
  children?: ReactNode;
};

const Accordion = ({
  accordionTitle,
  count = 0,
  children,
  alwaysOpen,
  initialOpen = false,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  const [open, setOpen] = useState(initialOpen);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  // Note: might be good to use details/summary elements in the future for this
  return (
    <div className={cn(className, 'accordion')} {...props}>
      <button type="button" className="accordion__title" onClick={toggleOpen}>
        <span>{accordionTitle}</span>
        {count > 0 && <Bubble size="small">{count}</Bubble>}
        {!alwaysOpen &&
          (open ? (
            <ChevronUp width={chevronSize} height={chevronSize} />
          ) : (
            <ChevronDown width={chevronSize} height={chevronSize} />
          ))}
      </button>
      {(open || alwaysOpen) && (
        <div className="accordion__content">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
