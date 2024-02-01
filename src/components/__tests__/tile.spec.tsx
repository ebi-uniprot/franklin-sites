import { render } from '@testing-library/react';

import Tile from '../tile';
import { ProtVistaIcon } from '..';

import colors from '../../styles/colours.json';

describe('Tile component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Tile
        title="Tile title"
        subtitle="Subtitle"
        backgroundImage={<ProtVistaIcon />}
        backgroundColor={colors.seaBlue}
        to="/"
        gradient
      >
        My description
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with default specified width', () => {
    const { asFragment } = render(
      <Tile title="Tile title" width="20rem" to="/" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
