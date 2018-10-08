import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import FranklinHeader from '../FranklinHeader';

const DefaultPageLayout = ({ content }) => (
  <Fragment>
    <FranklinHeader />
    <div className="default-page-layout grid-container">
      <DefaultPageContent>{content}</DefaultPageContent>
    </div>
  </Fragment>
);

DefaultPageLayout.propTypes = {
  content: PropTypes.element,
};

DefaultPageLayout.defaultProps = {
  content: () => <h3>Page Content</h3>,
};

export default DefaultPageLayout;
