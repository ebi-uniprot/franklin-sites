import React from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import Sidebar from './Sidebar';
import FranklinHeader from '../FranklinHeader';

const DefaultPageLayout = ({ content, sections }) => (
  <div className="default-page-layout ">
    <FranklinHeader />
    <DefaultPageContent>{content}</DefaultPageContent>
    {sections && <Sidebar sections={sections} />}
  </div>
);

DefaultPageLayout.propTypes = {
  content: PropTypes.element,
  sections: PropTypes.arrayOf(PropTypes.object),
};

DefaultPageLayout.defaultProps = {
  content: () => <h3>Page Content</h3>,
  sections: [],
};

export default DefaultPageLayout;
