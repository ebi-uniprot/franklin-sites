import { useState, useEffect, FC, ReactNode, KeyboardEvent } from 'react';

import Bubble from './bubble';

import '../styles/components/accordion.scss';

import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

const chevronSize = 16;

type Props = {
  /**
   * The title, works as a trigger to open/close
   */
  title: ReactNode;
  /**
   * Number displayed at the right of the accordion. This could, for example, be used to inform
     the user how many checkboxes have selected in the accodion's hidden content.
   */
  count?: number;
  /**
   * Disable toggling and always open accordion
   */
  alwaysOpen?: boolean;
};

const Accordion: FC<Props> = ({ title, count = 0, children, alwaysOpen }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const handleKeyPress = (key: KeyboardEvent) => {
    if (key.key === 'Enter') {
      toggleOpen();
    }
  };
  useEffect(() => {
    if (alwaysOpen === false) {
      setOpen(false);
    }
  }, [alwaysOpen]);
  return (
    <div className="accordion">
      <div
        data-testid="accordion-title"
        role="button"
        tabIndex={0}
        className="accordion__title"
        onClick={() => toggleOpen()}
        onKeyPress={(key) => handleKeyPress(key)}
      >
        <div className="accordion__title__text">{title}</div>

        <div className="accordion__title__side">
          {count > 0 && (
            <Bubble size="small" className="accordion__title__side__count">
              {count}
            </Bubble>
          )}
          {!alwaysOpen &&
            (open ? (
              <ChevronUp
                width={chevronSize}
                height={chevronSize}
                className="accordion__title__side__chevron"
              />
            ) : (
              <ChevronDown
                width={chevronSize}
                height={chevronSize}
                className="accordion__title__side__chevron"
              />
            ))}
        </div>
      </div>
      <div
        data-testid="accordion-content"
        className={`accordion__content ${
          open || alwaysOpen
            ? 'accordion__content--display-content'
            : 'accordion__content--hide-content'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
