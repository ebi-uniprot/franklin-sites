import cn from 'classnames';

import '../styles/components/header.scss';

type HeroHeaderProps = {
  title: JSX.Element;
  children: JSX.Element;
  footer?: JSX.Element;
  className?: string;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({
  title = '',
  children,
  footer,
  className,
  ...props
}) => (
  <div className={cn('hero-header', className)} {...props}>
    <div className="hero-header__title">
      <h1>{title}</h1>
    </div>
    <div className="hero-header__content">{children}</div>
    <div className="hero-header__footer">{footer}</div>
  </div>
);

export default HeroHeader;
