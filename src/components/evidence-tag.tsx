import {
  useState,
  useRef,
  cloneElement,
  ReactNode,
  FC,
  ReactElement,
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
   * Displayed on on mouseover
   */
  title: string;
  /**
   * Decides the colour of the tag
   */
  className?: string;
  /**
   * Decides the colour of the tag
   */
  iconComponent: ReactElement<{ width: number; height: number }>;
  /**
   * The content of the tag
   */
  children: ReactNode;
};

const EvidenceTag: FC<EvidenceTagProps> = ({
  label,
  title,
  className,
  iconComponent = <EvidenceTagIcon />,
  children,
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
      >
        {cloneElement(iconComponent, { width: size, height: size })}
        <span className="evidence-tag__label" title={title}>
          {label}
        </span>
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
