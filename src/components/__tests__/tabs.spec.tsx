import { screen, render, fireEvent } from '@testing-library/react';

import { Tabs, Tab } from '../tabs';

describe('Tabs', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Tabs>
        <Tab title={<div>Title 1</div>}>blah</Tab>
        <Tab title="Title 2">blaher</Tab>
        <Tab title="Title 3">blahest</Tab>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render other default tab', () => {
    const { asFragment } = render(
      <Tabs>
        <Tab title={<div>Title 1</div>}>blah</Tab>
        <Tab title="Title 2">blaher</Tab>
        <Tab title="Title 3" defaultSelected>
          blahest
        </Tab>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render tabs and pass extra props', () => {
    const { asFragment } = render(
      <Tabs data-value="value">
        <Tab title={<div>Title 1</div>} aria-label="blah!">
          blah
        </Tab>
        <Tab title="Title 2">blaher</Tab>
        <Tab title="Title 3" className="merged-class" data-key="3">
          blahest
        </Tab>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show corresponding content when 2nd tab title is clicked', () => {
    render(
      <Tabs>
        <Tab id="a" title={<div>Title 1</div>}>
          blah
        </Tab>
        <Tab id="b" title="Title 2">
          blaher
        </Tab>
        <Tab id="c" title="Title 3">
          blahest
        </Tab>
      </Tabs>
    );
    let content = screen.queryByTestId('tab-content');
    expect(content).not.toHaveTextContent('blaher');
    const title = screen.queryAllByTestId('tab-title');
    fireEvent.click(title[1]);
    content = screen.queryByTestId('tab-content');
    expect(content).toHaveTextContent('blaher');
  });

  it('should show 2nd tab if defined as active', () => {
    render(
      <Tabs active="b">
        <Tab id="a" title={<div>Title 1</div>}>
          blah-1
        </Tab>
        <Tab id="b" title="Title 2">
          blaher
        </Tab>
        <Tab id="c" title="Title 3" />
      </Tabs>
    );
    const content = screen.queryByTestId('tab-content');
    expect(content).not.toHaveTextContent('blah-1');
    expect(content).toHaveTextContent('blaher');
  });

  it('should keep cached tab in document but not visible if not active', () => {
    render(
      <Tabs>
        <Tab id="a" title={<div>Title 1</div>}>
          blah-1
        </Tab>
        <Tab id="b" cache title="Title 2">
          blaher
        </Tab>
        <Tab id="c" title="Title 3" />
      </Tabs>
    );
    // First tab is active so as usual
    expect(screen.queryByTestId('tab-content')).toHaveTextContent('blah-1');
    // Second tab is inactive and cached so it should be in the document but not visible
    expect(screen.queryByText('blaher')).toBeInTheDocument();
    expect(screen.queryByText('blaher')).not.toBeVisible();
  });
});
