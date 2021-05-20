import { FC, useState } from 'react';
import { Button } from './button';

const EllipsisReveal: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        children
      ) : (
        <Button variant="tertiary" onClick={() => setOpen(true)}>
          [...]
        </Button>
      )}
    </>
  );
};

export default EllipsisReveal;
