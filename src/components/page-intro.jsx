import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatLargeNumber } from '../utils';
import '../styles/components/page-intro.scss';
import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

const chevronSize = 20;
class PageIntro extends Component {
  state = { showContent: false };

  render() {
    const {
      title, resultsCount, children, links,
    } = this.props;
    const { showContent } = this.state;
    return (
      <div className="page-intro">
        <h2>
          <button
            type="button"
            onClick={() => this.setState({ showContent: !showContent })}
            className="dropdown"
          >
            {showContent ? (
              <ChevronUp width={chevronSize} height={chevronSize} />
            ) : (
              <ChevronDown width={chevronSize} height={chevronSize} />
            )}
            {' '}
            {title}
          </button>
          {resultsCount > 0 && (
          <small>
            {' '}
            {formatLargeNumber(resultsCount)}
            {' '}
results
          </small>
          )}
        </h2>

        <div className={`intro-content ${showContent && 'intro-content--display-content'}`}>
          {children}
          <div className="intro-links">
            {links.map(link => (
              <Link to={link.destination} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PageIntro.propTypes = {
  /**
   * The title, works as a trigger to open/close
   */
  title: PropTypes.string.isRequired,
  /**
   * Number of results
   */
  resultsCount: PropTypes.number,
  /**
   * Content revealed on toggle
   */
  children: PropTypes.node.isRequired,
  /**
   * Links revealed on toggle
   */
  links: PropTypes.arrayOf(PropTypes.shape({})),
};

PageIntro.defaultProps = {
  resultsCount: 0,
  links: [],
};

export default PageIntro;
