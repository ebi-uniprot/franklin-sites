import { LongNumber as LongNumberComponent } from '../src/components';

export default {
  title: 'Visualisation/Long number',
};

export const LongNumber = () => (
  <LongNumberComponent>{1000000000}</LongNumberComponent>
);

export const ShortNumber = () => (
  <LongNumberComponent>{100}</LongNumberComponent>
);
