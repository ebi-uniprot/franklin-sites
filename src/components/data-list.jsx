import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';
import Card from './card';

const getEventProps = (onSelect, onCardClick, content, idKey) => {
  const eventProps = {};
  if (onSelect) {
    eventProps.onSelect = () => onSelect(content[idKey]);
  }
  if (onCardClick) {
    eventProps.onClick = () => onCardClick(content[idKey]);
  }
  return eventProps;
};

const DataList = ({
  data, idKey, selectable, selected, onSelect, dataRenderer, onCardClick,
}) => (
  <Fragment>
    {data.map(content => (
      <Card
        key={content[idKey]}
        {...{
          selectable,
          selected: !!selected[content[idKey]],
          ...getEventProps(onSelect, onCardClick, content, idKey),
        }}
      >
        {dataRenderer(content)}
      </Card>
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
   * A callback function that is called whenever a user selects a row. The row ID is returned upon
   * callback.
   */
  onSelect: PropTypes.func,
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected: PropTypes.instanceOf(Object),
  /**
   * Flag which indicates rows should be selectable with an input box.
   */
  selectable: PropTypes.bool,
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  dataRenderer: PropTypes.func.isRequired,
  onCardClick: PropTypes.func,
};

DataList.defaultProps = {
  idKey: 'id',
  selected: {},
  onSelect: null,
  selectable: false,
  onCardClick: null,
};

export default withDataLoader(DataList);
