import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultPageContent from './DefaultPageContent';
import Header from '../app/Header';

const DefaultPageLayout = props => (
    <Fragment>
        <Header />
        <div className="default-page-layout grid-container">
            <DefaultPageContent>{props.content}</DefaultPageContent>
        </div>
    </Fragment>
);

DefaultPageLayout.propTypes = {
    title: PropTypes.string,
    content: PropTypes.element
};

DefaultPageLayout.defaultProps = {
    title: 'Page Title',
    content: () => <h3>Page Content</h3>
};

export default DefaultPageLayout;
