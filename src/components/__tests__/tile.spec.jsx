import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ProtVistaIcon } from '../';
import colors from '../../styles/colours.json';

import Tile from '../tile';

import useSize from '../../hooks/useSize';
jest.mock('../../hooks/useSize');

useSize.mockReturnValue([{ width: 800 }]);

let component;
let clickFn = jest.fn();

describe('Tile component', () => {
  beforeEach(() => {
    component = render(
      <Tile
        title="Tile title"
        subtitle="Subtitle"
        description="My description"
        backgroundImage={ProtVistaIcon}
        backgroundColor={colors.seaBlue}
        onClick={clickFn}
        gradient
      />
    );
  });

  test('should render', () => {
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should handle click', () => {
    const { getByText } = component;
    fireEvent.click(getByText('Subtitle'));
    expect(clickFn).toHaveBeenCalled();
  });

  test('should render with default specified width', () => {
    const { asFragment } = render(
      <Tile title="Tile title" onClick={clickFn} width="20rem" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
