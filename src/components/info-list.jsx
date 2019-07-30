import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/info-list.scss';

const InfoList = ({ infoData, columns }) => (
  <div className={`info-list${columns ? ' info-list--columns' : ''}`}>
    {infoData.map(
      // Only draw if there is content
      item =>
        item.content && (
          <div className="info-list__item" key={item.title}>
            <div className="info-list__item__title">{item.title}</div>
            <div className="info-list__item__content">{item.content}</div>
          </div>
        ),
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
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ).isRequired,
  /**
   * A boolean indicating whether the component should span multiple
   * columns on medium to large screens or not.
   */
  columns: PropTypes.bool,
};

InfoList.defaultProps = {
  columns: false,
};

export default InfoList;
