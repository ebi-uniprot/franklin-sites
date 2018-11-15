/* global BASE_URL */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Atoms from './Atoms';
import UIComponents from './UIComponents';

const App = () => (
  <Router basename={BASE_URL}>
    <Fragment>
      <Route path="/" exact render={() => <Redirect to="/atoms" />} />
      <Route path="/atoms" component={Atoms} />
      <Route path="/ui-components" component={UIComponents} />
    </Fragment>
  </Router>
);

export default App;
