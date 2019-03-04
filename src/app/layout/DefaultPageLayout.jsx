import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import Sidebar from './Sidebar';
import FranklinHeader from '../FranklinHeader';

const DefaultPageLayout = ({ content, sidebarContent }) => (
  <Fragment>
    <FranklinHeader />
    <div className="default-page-layout ">
      <DefaultPageContent>{content}</DefaultPageContent>
      {sidebarContent && <Sidebar>{sidebarContent}</Sidebar>}
    </div>
  </Fragment>
);

DefaultPageLayout.propTypes = {
  content: PropTypes.element,
  sidebarContent: PropTypes.element,
};

DefaultPageLayout.defaultProps = {
  content: () => <h3>Page Content</h3>,
  sidebarContent: undefined,
};

export default DefaultPageLayout;
