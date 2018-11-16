import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import Sidebar from './Sidebar';
import FranklinHeader from '../FranklinHeader';

const DefaultPageLayout = ({ content, sidebarContent }) => (
  <Fragment>
    <FranklinHeader />
    <div className="default-page-layout grid-container">
      <DefaultPageContent>{content}</DefaultPageContent>
      <Sidebar>{sidebarContent}</Sidebar>
    </div>
  </Fragment>
);

DefaultPageLayout.propTypes = {
  content: PropTypes.element,
  sidebarContent: PropTypes.element,
};

DefaultPageLayout.defaultProps = {
  content: () => <h3>Page Content</h3>,
  sidebarContent: () => <h3>Sidebar content</h3>,
};

export default DefaultPageLayout;
