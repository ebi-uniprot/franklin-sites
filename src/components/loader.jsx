import React from 'react';
import ProteinIcon from '../svg/protein.svg';
import '../styles/components/loader.scss';

const Loader = () => (
  <div className="loader-container">
    <ProteinIcon className="loader" width="100" height="100" />
  </div>
);

export default Loader;
