import PropTypes from 'prop-types';
import cn from 'classnames';

import '../styles/components/hero-container.scss';

const HeroContainer = ({ title, children, className }) => (
  <div className={cn('hero-container', className)}>
    <section>
      {title && <h4>{title}</h4>}
      {children}
    </section>
  </div>
);
HeroContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

HeroContainer.defaultProps = {
  title: '',
  className: '',
};

export default HeroContainer;
