import { useState, FC, ReactElement, HTMLAttributes, useId } from 'react';
import cn from 'classnames';

import EvidenceTagIcon from '../svg/evidence-tag.svg';

import '../styles/components/evidence-tag.scss';

const size = 12;

const defaultIcon = <EvidenceTagIcon width={size} height={size} />;

type EvidenceTagProps = {
  /**
   * Displayed on the tag
   */
  label: string;
  /**
   * Icon to display
   */
  iconComponent?: ReactElement;
};

const EvidenceTag: FC<EvidenceTagProps & HTMLAttributes<HTMLButtonElement>> = ({
  label,
  title,
  className,
  iconComponent = defaultIcon,
  children,
  ...props
}) => {
  const buttonId = useId();
  const [contentDisplay, setContentDisplay] = useState(false);
  return (
    <>
      <button
        className={cn(className, 'evidence-tag')}
        onClick={() => setContentDisplay(!contentDisplay)}
        type="button"
        data-testid="evidence-tag-trigger"
        aria-expanded={contentDisplay}
        aria-controls={buttonId}
        {...props}
      >
        {iconComponent}
        <span className="evidence-tag__label">{label}</span>
      </button>
      {children && (
        <div
          className={`evidence-tag-content ${
            contentDisplay ? 'evidence-tag-content--visible' : ''
          }`}
          data-testid="evidence-tag-content"
          id={buttonId}
        >
          {contentDisplay && children}
        </div>
      )}
    </>
  );
};

export default EvidenceTag;
