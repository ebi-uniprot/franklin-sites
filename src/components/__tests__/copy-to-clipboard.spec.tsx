import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import CopyToClipboard from '../copy-to-clipboard';

// Mock browser clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('CopyToClipboard component', () => {
  const toCopy = 'foo bar baz';

  it('should render', () => {
    const { asFragment } = render(
      <CopyToClipboard
        textToCopy={toCopy}
        beforeCopy="Copy this"
        afterCopy="Copied it"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should change button text when after copy', async () => {
    render(
      <CopyToClipboard
        textToCopy={toCopy}
        beforeCopy="Copy this"
        afterCopy="Copied it"
      />
    );
    const beforeCopyButton = screen.getByText('Copy this');
    fireEvent.click(beforeCopyButton);
    await waitFor(() => screen.getByText('Copied it'));
  });

  it('should call onCopy when clicked', async () => {
    const onCopy = jest.fn();
    render(
      <CopyToClipboard
        textToCopy={toCopy}
        beforeCopy="Copy this"
        afterCopy="Copied it"
        onCopy={onCopy}
      />
    );
    const beforeCopyButton = screen.getByText('Copy this');
    fireEvent.click(beforeCopyButton);
    await waitFor(() => expect(onCopy).toHaveBeenCalledWith(toCopy));
  });
});
