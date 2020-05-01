import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';

const DataList = ({ data, getIdKey, dataRenderer }) => (
  <Fragment>
    {data.map(content => (
      <section key={getIdKey(content)}>{dataRenderer(content)}</section>
    ))}
  </Fragment>
);

DataList.propTypes = {
  /**
   * The data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A function that returns a unique ID for each of the data objects. Defaults to return the "id" attribute.
   */
  getIdKey: PropTypes.func,
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  dataRenderer: PropTypes.func.isRequired,
};

DataList.defaultProps = {
  getIdKey: ({ id }) => id,
};

export default withDataLoader(DataList);
