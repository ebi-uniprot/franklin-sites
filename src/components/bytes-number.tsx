import { formatBytesNumber } from '../utils';

type Props = {
  /**
   * The number to format
   */
  children: string | number;
  decimals?: number;
};

const BytesNumber = ({ children, decimals = 0 }: Props) => (
  <>{formatBytesNumber(children, decimals)}</>
);

export default BytesNumber;
