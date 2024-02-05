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
        // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
        link={<a href="https://www.uniprot.org" />}
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
