import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';

const DataList = ({ data, idKey, dataRenderer }) => (
  <Fragment>
    {data.map(content => (
      <section key={content[idKey]}>{dataRenderer(content)}</section>
    ))}
  </Fragment>
);

DataList.propTypes = {
  /**
   * The data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The name of an attribute in each of the data objects which serves as a unique ID
   */
  idKey: PropTypes.string,
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  dataRenderer: PropTypes.func.isRequired,
};

DataList.defaultProps = {
  idKey: 'id',
};

export default withDataLoader(DataList);
