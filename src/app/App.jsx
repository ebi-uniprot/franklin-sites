/* global BASE_URL */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import FranklinSite from '../components/franklin-site';
import Atoms from './Atoms';
import UIComponents from './UIComponents';
import ScrollItemsLoaderDemo from './ScrollItemsLoaderDemo';

const App = () => (
  <FranklinSite>
    <Router basename={BASE_URL}>
      <Fragment>
        <Route path="/" exact render={() => <Redirect to="/atoms" />} />
        <Route path="/atoms" component={Atoms} />
        <Route path="/ui-components" component={UIComponents} />
        <Route path="/scroll-items-loader" component={ScrollItemsLoaderDemo} />
      </Fragment>
    </Router>
  </FranklinSite>
);

export default App;
