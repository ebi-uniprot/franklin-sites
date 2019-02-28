import React, { Fragment } from 'react';

import DefaultPageLayout from './layout/DefaultPageLayout';
import Typography from './Typography';
import Colours from './Colours';
import Icons from './Icons';

const HomePageContent = () => (
  <Fragment>
    <Colours />
    <Typography />
    <Icons />
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
    <li>
      <a href="#icons">Icons</a>
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
