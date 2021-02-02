import { FC, AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import ExternalLinkIcon from '../svg/external-link.svg';

import '../styles/components/external-link.scss';

type Props = {
  /**
   * The location that is visted when clicked
   */
  url: string;
  /**
   * Decides if a new browser tab should be opened or not, defaults to true
   */
  newTab?: boolean;
};

const ExternalLink: FC<
  Props & Exclude<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
> = ({ children, url, newTab = true, className, rel, ...props }) => (
  <a
    {...props}
    className={cn('external-link', className)}
    rel={cn('noopener', rel)}
    href={url}
    {...(newTab ? { target: '_blank' } : {})}
  >
    {children}
    <ExternalLinkIcon width={12.5} />
  </a>
);

export default ExternalLink;
