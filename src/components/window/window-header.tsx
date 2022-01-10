import { DefaultCloseButton } from './window-buttons';

type Props = {
  title: string;
  withCloseButton?: boolean;
  onWindowClose?: () => void;
};

const WindowHeader = ({ title, withCloseButton, onWindowClose }: Props) => (
  <div className="window__header">
    <span className="window__header__title">{title}</span>
    {withCloseButton && onWindowClose && (
      <DefaultCloseButton onClick={onWindowClose} iconOnly />
    )}
  </div>
);

export default WindowHeader;
