import { screen, fireEvent } from '@testing-library/react';

import DisplayMenu from '../display-menu';

import displayMenuData, {
  displayMenuDummyLeft1,
  displayMenuDummyLeft2,
} from '../__mocks__/displayMenu';

import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';

describe('Display menu component', () => {
  it('should render', () => {
    const { asFragment } = renderWithBrowserRouter(
      <DisplayMenu data={displayMenuData} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle item content', async () => {
    renderWithBrowserRouter(<DisplayMenu data={displayMenuData} />);
    expect(
      screen
        .getAllByText(displayMenuDummyLeft1)[0]
        .closest('.display-menu__item_content')
    ).toBeInTheDocument();

    expect(screen.queryByText(displayMenuDummyLeft2)).toBeNull();

    fireEvent.click(screen.getByText(displayMenuData[1].name));
    const newContent2 = await screen.findByText(displayMenuDummyLeft2);
    expect(newContent2).toBeInTheDocument();
  });
});
