import React from 'react';
import {
  Link,
} from 'react-router-dom';

import '../../styles/components/_header.scss';

const Header = () => (
  <div className="header">
    <a className="header__logo" href="/">Franklin</a>
    <ul className="header__navigation">
      <li>
        <Link to="/">Home</Link>{' '}
      </li>
      <li>
        <Link to="/ui-components">UI components</Link>{' '}
      </li>
    </ul>
  </div>
);

export default Header;

