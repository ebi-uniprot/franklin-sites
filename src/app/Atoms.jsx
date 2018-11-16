import React, { Fragment } from 'react';

import DefaultPageLayout from './layout/DefaultPageLayout';
import Typography from './Typography';
import Colours from './Colours';

const HomePageContent = () => (
  <Fragment>
    <Colours />
    <Typography />
  </Fragment>
);

const SidebarContent = () => (
  <Fragment>
    <li>
      <a href="#colours">Colours</a>
    </li>
    <li>
      <a href="#type">Typography</a>
    </li>
  </Fragment>
);

const HomePage = () => (
  <DefaultPageLayout
    title="Home Page"
    content={<HomePageContent />}
    sidebarContent={<SidebarContent />}
  />
);

export default HomePage;
