import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import DefaultPageLayout from '../layout/DefaultPageLayout';
import Tile from '../components/tile';

const HomePageContent = () => (
    <Fragment>
        {formatPattern(Tile)}
        <Link to="/ui-components"> UI components </Link>{' '}
    </Fragment>
);

const formatPattern = Component => (
    <Fragment>
        <h2>{Component.title}</h2>
        <div className="grid-x">
            <div className="cell small-6">
                <Component />
            </div>
            <div className="cell small-6">
                <h5>Purpose</h5>
                <p>{Component.purpose}</p>
                <h5>Function</h5>
                <p>{Component.function}</p>
            </div>
        </div>
        <hr />
    </Fragment>
);

const HomePage = () => <DefaultPageLayout title="Home Page" content={<HomePageContent />} />;

export default HomePage;
