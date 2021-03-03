import { FC } from 'react';

import { formatLargeNumber } from '../utils';

type Props = {
  /**
   * The number to format
   */
  children: string | number;
};

const LongNumber: FC<Props> = ({ children }) => (
  <>{formatLargeNumber(children)}</>
);

export default LongNumber;
