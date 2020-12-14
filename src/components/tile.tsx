import { CSSProperties, FC, ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import '../styles/components/tile.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The tile title
   */
  title: string;
  /**
   * The tile subtitle
   */
  subtitle?: string;
  /**
   * The tile description.
   */
  description?: ReactNode;
  /**
   * The background color
   */
  backgroundColor?: string;
  /**
   * The background image
   */
  backgroundImage?: JSX.Element;
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

export const Tile: FC<Props> = ({
  title,
  subtitle,
  description,
  backgroundColor,
  backgroundImage,
  gradient = false,
  width,
  className,
  style,
  ...props
}) => (
  <button
    type="button"
    className={classNames(className, {
      tile: 'tile',
      'tile-gradient': gradient,
    })}
    style={
      {
        ...style,
        '--tile-background': backgroundColor,
        width: width || '100%',
      } as CSSProperties
    }
    {...props}
  >
    <section className="tile__background-image">{backgroundImage}</section>
    <section className="tile__content">
      <h3 className="tile__header">{title}</h3>
      {subtitle && <h5 className="tile__subtitle">{subtitle}</h5>}
      {description && (
        <small className="tile__description">{description}</small>
      )}
    </section>
  </button>
);

export default Tile;
