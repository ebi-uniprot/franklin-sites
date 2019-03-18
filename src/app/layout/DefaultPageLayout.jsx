import React from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import Sidebar from './Sidebar';
import FranklinHeader from '../FranklinHeader';

const DefaultPageLayout = ({ content, sidebarContent }) => (
  <div className="default-page-layout ">
    <FranklinHeader />
    <DefaultPageContent>{content}</DefaultPageContent>
    {sidebarContent && <Sidebar>{sidebarContent}</Sidebar>}
  </div>
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
