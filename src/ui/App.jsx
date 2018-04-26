import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './app/HomePage';
import UIComponents from './app/UIComponents';

const App = () => (
    <Router>
        <Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/ui-components" component={UIComponents} />
        </Fragment>
    </Router>
);

export default App;
