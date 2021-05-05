import {
  useState,
  useRef,
  cloneElement,
  FC,
  ReactElement,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';
import { v1 } from 'uuid';

import EvidenceTagIcon from '../svg/evidence-tag.svg';

import '../styles/components/evidence-tag.scss';

const size = 12;

type EvidenceTagProps = {
  /**
   * Displayed on the tag
   */
  label: string;
  /**
   * Icon to display
   */
  iconComponent?: ReactElement<{ width: number; height: number }>;
};

const EvidenceTag: FC<EvidenceTagProps & HTMLAttributes<HTMLButtonElement>> = ({
  label,
  title,
  className,
  iconComponent = <EvidenceTagIcon />,
  children,
  ...props
}) => {
  const idRef = useRef(v1());
  const [contentDisplay, setContentDisplay] = useState(false);
  return (
    <>
      <button
        className={cn(className, 'evidence-tag')}
        onClick={() => setContentDisplay(!contentDisplay)}
        type="button"
        data-testid="evidence-tag-trigger"
        aria-expanded={contentDisplay}
        aria-controls={idRef.current}
        {...props}
      >
        {cloneElement(iconComponent, { width: size, height: size })}
        <span className="evidence-tag__label">{label}</span>
      </button>
      {children && (
        <div
          className={`evidence-tag-content ${
            contentDisplay ? 'evidence-tag-content--visible' : ''
          }`}
          data-testid="evidence-tag-content"
          id={idRef.current}
        >
          {contentDisplay && children}
        </div>
      )}
    </>
  );
};

export default EvidenceTag;
