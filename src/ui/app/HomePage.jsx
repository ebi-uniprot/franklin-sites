import React, { Fragment } from 'react';

import DefaultPageLayout from '../layout/DefaultPageLayout';
import Typography from './Typography';
import Colours from './Colours';

const HomePageContent = () => (
  <Fragment>
    <Colours />
    <Typography />
  </Fragment>
);

const HomePage = () => <DefaultPageLayout title="Home Page" content={<HomePageContent />} />;

export default HomePage;
