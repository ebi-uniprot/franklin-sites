import React from 'react';
import Logo from './franklin_logo.svg';
import Header from '../components/header';

const links = [
  {
    label: 'Atoms',
    path: '/atoms',
  },
  {
    label: 'UI Components',
    path: '/ui-components',
  },
  {
    label: 'Data Table',
    path: '/data-table',
  },
  {
    label: 'Scroll Items Loader',
    path: '/scroll-items-loader',
  },
];

const FranklinHeader = () => (
  <Header className="default-header" logo={<Logo width={50} height={50} />} links={links} />
);

export default FranklinHeader;
