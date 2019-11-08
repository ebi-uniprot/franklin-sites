import React, { Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import Typography from './Typography';
import Colours from './Colours';
import Icons from './Icons';
import Buttons from './Buttons';
import Links from './Links';
import Numbers from './Numbers';
import Windows from './Windows';
import Modals from './Modals';

const HomePageContent = () => (
  <Fragment>
    <Colours />
    <Typography />
    <Icons />
    <Buttons />
    <Links />
    <Numbers />
    <Windows />
    <Modals />
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
      {
        label: 'Numbers',
        id: 'numbers',
      },
      {
        label: 'Windows',
        id: 'windows',
      },
      {
        label: 'Modals',
        id: 'modals',
      },
    ]}
  />
);

export default HomePage;
