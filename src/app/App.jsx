import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Atoms from './Atoms';
import UIComponents from './UIComponents';

const App = () => (
  <Router basename="">
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/atoms" component={Atoms} />
      <Route path="/ui-components" component={UIComponents} />
    </Fragment>
  </Router>
);

export default App;
