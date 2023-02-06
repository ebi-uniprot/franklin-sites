import { HTMLAttributes } from 'react';
import cn from 'classnames';

import ProteinIcon from '../svg/protein.svg';

import '../styles/components/loader.scss';

type Props = {
  progress?: number;
};

const Loader = ({
  progress,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  let p: number | undefined;
  if (progress || progress === 0) {
    if (progress < 0 || progress > 1) {
      // eslint-disable-next-line no-console
      console.warn(
        `Loader's "progress" prop needs to be within [0, 1], it is now "${progress}"`
      );
    }
    p = progress;
  }
  return (
    <div className={cn('loader-container', className)} {...props}>
      <ProteinIcon className="loader" width="100" height="100" />
      {p && (
        <span className="loader-container__progress">
          <progress title={`Progress: ${Math.floor(p * 100)}%`} value={p}>
            {Math.floor(p * 100)}%
          </progress>
        </span>
      )}
    </div>
  );
};

export default Loader;
