import React, { Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import Typography from './Typography';
import Colours from './Colours';
import Icons from './Icons';
import Buttons from './Buttons';
import Links from './Links';

const HomePageContent = () => (
  <Fragment>
    <Colours />
    <Typography />
    <Icons />
    <Buttons />
    <Links />
  </Fragment>
);

const HomePage = () => (
  <DefaultPageLayout
    title="Home Page"
    content={<HomePageContent />}
    sections={[
      {
        label: 'Colours',
        id: 'colours',
      },
      {
        label: 'Typography',
        id: 'type',
      },
      {
        label: 'Icons',
        id: 'icons',
      },
      {
        label: 'Buttons',
        id: 'buttons',
      },
      {
        label: 'Links',
        id: 'links',
      },
    ]}
  />
);

export default HomePage;
