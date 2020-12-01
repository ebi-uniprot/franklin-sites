import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import '../styles/components/tile.scss';
import useSize from '../hooks/useSize';

type Props = {
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
  description?: JSX.Element;
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
   * The length of a side of the Tile square (css value). By default it will use the
   * width of the provided container.
   */
  sideLength?: string;
  /**
   * Action triggered on click
   */
  onClick: () => void;
};

export const Tile: FC<Props> = ({
  title,
  subtitle,
  description,
  backgroundColor,
  backgroundImage,
  gradient = false,
  sideLength,
  onClick,
}) => {
  const classes = classNames({ tile: 'tile', 'tile-gradient': gradient });
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(sideLength);

  const [sizes] = useSize(containerRef);

  useEffect(() => {
    if (sideLength) {
      return;
    }
    if (sizes) {
      setSize(sizes.width);
    }
  }, [sizes, sideLength]);

  return (
    <div ref={containerRef}>
      <div
        className={classes}
        style={
          {
            '--tile-background': backgroundColor,
            width: size,
            height: size,
          } as CSSProperties
        }
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={onClick}
      >
        <section className="tile__background-image" ref={ref}>
          {backgroundImage}
        </section>
        <section className="tile__content">
          <h3 className="tile__header">{title}</h3>
          {subtitle && <h5 className="tile__subtitle">{subtitle}</h5>}
          {description && (
            <small className="tile__description">{description}</small>
          )}
        </section>
      </div>
    </div>
  );
};

export default Tile;
