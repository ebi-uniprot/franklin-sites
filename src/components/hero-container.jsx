import PropTypes from 'prop-types';
import '../styles/components/hero-container.scss';

const HeroContainer = ({ title, children }) => (
  <div className="hero-container">
    <section>
      {title && <h4>{title}</h4>}
      {children}
    </section>
  </div>
);
HeroContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeroContainer.defaultProps = {
  title: '',
};

export default HeroContainer;
