import { LongNumber } from '../src/components';

export default {
  title: 'Visualisation/Long number',
};

export const longNumber = () => <LongNumber>{1000000000}</LongNumber>;

export const shortNumber = () => <LongNumber>{100}</LongNumber>;
