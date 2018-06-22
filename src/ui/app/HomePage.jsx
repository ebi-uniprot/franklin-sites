import React, { Fragment } from 'react';

import DefaultPageLayout from '../layout/DefaultPageLayout';
import Logo from '../franklin_logo.svg';

const HomePageContent = () => (
  <Fragment>
    <div className="text-center">
      <h1>Franklin</h1>
      <Logo width={200} height={200} />
      <h4>The UniProt design system</h4>
    </div>
    <h2>Introduction</h2>
    <p>
      Franklin provides all user interface components required to build the UniProt website. It is
      based on the foundation framework, which is used for all "atomic level" components
      (Typography, forms, lists etc...).
    </p>
  </Fragment>
);

const HomePage = () => <DefaultPageLayout title="Home Page" content={<HomePageContent />} />;

export default HomePage;
