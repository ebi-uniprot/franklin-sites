import {
  useState,
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
  ReactNode,
} from 'react';
import cn from 'classnames';

import { Button } from '..';

import '../styles/components/ellipsis-reveal.scss';

const Context = createContext<
  null | [Set<string>, Dispatch<SetStateAction<Set<string>>>]
>(null);
Context.displayName = 'EllipsisRevealContext';

const Provider = ({ children }: { children: ReactNode }) => {
  const state = useState(new Set<string>());

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const EllipsisReveal = ({
  children,
  className,
  title,
  contextKey,
  ...props
}: PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> & { contextKey?: string }
>) => {
  const contextState = useContext(Context);
  const openFromContext = contextKey && contextState?.[0].has(contextKey);
  const [open, setOpen] = useState(false);
  if (open || openFromContext) {
    return <>{children}</>;
  }
  return (
    <Button
      variant="tertiary"
      onClick={() => {
        setOpen(true);
        if (contextKey) {
          contextState?.[1](
            (previousSet) => new Set([...previousSet, contextKey])
          );
        }
      }}
      className={cn(className, 'ellipsis-reveal')}
      title={title || 'Show more'}
      aria-expanded="false"
      {...props}
    >
      [...]
    </Button>
  );
};

EllipsisReveal.Provider = Provider;

export default EllipsisReveal;
