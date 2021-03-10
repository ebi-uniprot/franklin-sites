import { render, fireEvent } from '@testing-library/react';
import CopyToClipboard from '../copy-to-clipboard';

jest.mock('copy-to-clipboard', () => jest.fn());

describe('CopyToClipboard component', () => {
  let rendered;
  const toCopy = 'foo bar baz';
  beforeEach(() => {
    rendered = render(
      <CopyToClipboard
        toCopy={toCopy}
        beforeCopy="Copy this"
        afterCopy="Copied it"
      />
    );
  });

  it('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should change button text when after copy', () => {
    const { getByText } = rendered;
    const beforeCopyButton = getByText('Copy this');
    fireEvent.click(beforeCopyButton);
    const afterCopyButton = getByText('Copied it');
    expect(afterCopyButton).toBeTruthy();
  });
});
