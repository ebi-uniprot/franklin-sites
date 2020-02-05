import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DisplayMenu } from '../src/components';
import displayMenuData from '../src/components/__mocks__/displayMenu';

export default {
  title: 'Layout|Display Menu',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const displayMenu = () => (
  <Router>
    <DisplayMenu data={displayMenuData} />
  </Router>
);
