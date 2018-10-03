import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './franklin_logo.svg';
import Header from '../components/header';

const FranklinHeader = () => (
  <Header>
    <a className="header__logo" href="/franklin">
      <Logo width={50} height={50} />
    </a>
    <ul className="header__navigation">
      <li>
        <Link to="/">Home</Link>
        {' '}
      </li>
      <li>
        <Link to="/atoms">Atoms</Link>
        {' '}
      </li>
      <li>
        <Link to="/ui-components">UI components</Link>
        {' '}
      </li>
    </ul>
  </Header>
);

export default FranklinHeader;
