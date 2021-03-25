import { createElement, CSSProperties, FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import ExternalLink, { Props as ExternalLinkProps } from './external-link';

import '../styles/components/tile.scss';

type HeadingLevels = `h${1 | 2 | 3 | 4 | 5 | 6}`;

type Props = (LinkProps | ExternalLinkProps) & {
  /**
   * The tile title
   */
  title: ReactNode;
  /**
   * The tile title heading level
   */
  headingLevel?: Exclude<HeadingLevels, 'h6'>;
  /**
   * The tile subtitle
   */
  subtitle?: ReactNode;
  /**
   * The background color
   */
  backgroundColor?: string;
  /**
   * The background image
   */
  backgroundImage?: ReactNode;
  /**
   * Whether to create a gradient based on the backgroung color or not
   */
  gradient?: boolean;
  /**
   * The width Tile square (css value). By default it will use the
   * width of the provided container.
   */
  width?: string;
};

const nextHeading = (level: HeadingLevels) => {
  if (level === 'h6') {
    throw new Error('no lower heading level than h6');
  }
  return `h${+level[1] + 1}`;
};

export const Tile: FC<Props> = ({
  title,
  headingLevel = 'h3',
  subtitle,
  backgroundColor,
  backgroundImage,
  gradient = false,
  width,
  className,
  style,
  children,
  ...props
}) => {
  const isExternal = 'url' in props;

  const linkTarget = (
    <span>
      {createElement(headingLevel, { className: 'tile__header medium' }, title)}
      {subtitle &&
        createElement(
          nextHeading(headingLevel),
          { className: 'tile__subtitle tiny' },
          subtitle
        )}
    </span>
  );

  return (
    <div
      className={cn(className, 'tile', { 'tile-gradient': gradient })}
      style={
        {
          ...style,
          '--tile-background': backgroundColor,
          width: width || '100%',
        } as CSSProperties
      }
    >
      <div className="tile__background-image" aria-hidden="true">
        {backgroundImage}
      </div>
      {isExternal ? (
        <ExternalLink
          className="tile__main-content"
          {...(props as ExternalLinkProps)}
          noIcon
        >
          {linkTarget}
        </ExternalLink>
      ) : (
        <Link className="tile__main-content" {...(props as LinkProps)}>
          {linkTarget}
        </Link>
      )}
      {children && <small className="tile__description">{children}</small>}
    </div>
  );
};

export default Tile;
