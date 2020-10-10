import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../styles/components/info-list.scss';

const InfoList = ({
  infoData,
  columns,
  isCompact,
  highlightFirstItem,
  noTitles,
}) => (
  <div
    className={classNames(
      'info-list',
      { 'info-list--columns': columns },
      { 'info-list--compact': isCompact },
      { 'info-list--no-title': noTitles }
    )}
  >
    {infoData.map(
      // Only draw if there is content
      (item, index) =>
        item.content && (
          <div className="info-list__item" key={item.title}>
            <div className="info-list__title">
              <h5 className="bold">{item.title}</h5>
            </div>

            <div className="info-list__content">
              {index === 0 && highlightFirstItem ? (
                <strong>{item.content}</strong>
              ) : (
                item.content
              )}
            </div>
          </div>
        )
    )}
  </div>
);

InfoList.propTypes = {
  /**
   * An array of objects each containing 'title' and 'content'
   */
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  /**
   * A boolean indicating whether the component should span multiple
   * columns on medium to large screens or not.
   */
  columns: PropTypes.bool,
  /**
   * A boolean indicating whether the component should render
   * as a compact list
   */
  isCompact: PropTypes.bool,
  /**
   * Should the first content item in the InfoList be bold
   */
  highlightFirstItem: PropTypes.bool,
  /**
   * Display titles or not
   */
  noTitles: PropTypes.bool,
};

InfoList.defaultProps = {
  columns: false,
  isCompact: false,
  noTitles: false,
  highlightFirstItem: false,
};

export default InfoList;
