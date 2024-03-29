import { createElement, CSSProperties, FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import ExternalLink, { Props as ExternalLinkProps } from './external-link';

import { HeadingLevels } from '../types/common';

import '../styles/components/tile.scss';

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
  /**
   * Whether to slide up the description when the mouse is over the tile.
   * Can be useful if the description text is long.
   */
  descriptionSlideUp?: boolean;
};

const nextHeading = (level: Exclude<HeadingLevels, 'h6'>) =>
  `h${+level[1] + 1}`;

export const Tile: FC<Props> = ({
  title,
  headingLevel = 'h2',
  subtitle,
  backgroundColor,
  backgroundImage,
  gradient = false,
  width,
  className,
  style,
  children,
  descriptionSlideUp = false,
  ...props
}) => {
  const isExternal = 'url' in props;

  const mainContent = (
    <span>
      {createElement(headingLevel, { className: 'tile__header big' }, title)}
      {subtitle &&
        createElement(
          nextHeading(headingLevel),
          { className: 'tile__subtitle small' },
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
          width,
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
          {mainContent}
        </ExternalLink>
      ) : (
        <Link className="tile__main-content" {...(props as LinkProps)}>
          {mainContent}
        </Link>
      )}
      {children && (
        <small
          className={cn(
            'tile__description',
            descriptionSlideUp && 'tile__description--animated'
          )}
        >
          {children}
        </small>
      )}
    </div>
  );
};

export default Tile;
