import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/info-list.scss';

const InfoList = ({ infoData }) => (
  <div className="info-list">
    {infoData.map(
      // Only draw if there is content
      item => item.content && (
        <div className="info-list__item" key={item.title}>
          <div className="info-list__item__title">{item.title}</div>
          <div className="info-list__item__content">{item.content}</div>
        </div>
      ),
    )}
  </div>
);

InfoList.propTypes = {
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.element,
    }),
  ).isRequired,
};

export default InfoList;
