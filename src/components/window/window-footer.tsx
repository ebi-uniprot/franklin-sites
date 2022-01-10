import { FC } from 'react';

import { DefaultCloseButton } from './window-buttons';

type Props = {
  withCloseButton?: boolean;
  onWindowClose?: () => void;
};

const WindowFooter: FC<Props> = ({
  withCloseButton,
  onWindowClose,
  children,
}) => (
  <div className="window__footer">
    {children}
    {withCloseButton && onWindowClose && (
      <DefaultCloseButton onClick={onWindowClose} text="Close" />
    )}
  </div>
);

export default WindowFooter;
