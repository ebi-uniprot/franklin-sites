import { formatLargeNumber } from '../utils';

type Props = {
  /**
   * The number to format
   */
  children: string | number;
};

const LongNumber = ({ children }: Props) => <>{formatLargeNumber(children)}</>;

export default LongNumber;
