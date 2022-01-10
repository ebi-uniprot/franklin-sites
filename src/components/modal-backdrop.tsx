import { useEffect, HTMLAttributes } from 'react';
import cn from 'classnames';

type Props = {
  handleExitModal: () => void;
  onWindowOpen: () => void;
};

const ModalBackdrop = ({
  className,
  handleExitModal,
  onWindowOpen,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  const bodyTag = document.body;
  bodyTag.classList.add('modal__body');

  // onWindowOpen not used but leads to console warning as added as
  // attribute. Long term should probably rename prop

  // clean-up, when component unmounts.
  useEffect(() => () => bodyTag.classList.remove('modal__body'));

  return (
    <div
      className={cn('modal__backdrop', className)}
      onClick={handleExitModal}
      role="dialog"
      aria-hidden
      {...props}
    />
  );
};

export default ModalBackdrop;
