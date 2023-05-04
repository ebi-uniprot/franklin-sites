import { ReactNode } from 'react';

import { DefaultCloseButton } from './window-buttons';

type Props = {
  withCloseButton?: boolean;
  onWindowClose?: () => void;
  children: ReactNode;
};

const WindowFooter = ({ withCloseButton, onWindowClose, children }: Props) => (
  <div className="window__footer">
    {children}
    {withCloseButton && onWindowClose && (
      <DefaultCloseButton onClick={onWindowClose} text="Close" />
    )}
  </div>
);

export default WindowFooter;
