import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/tabs.scss';

const Title = ({ children, active, onClick }) => {
  const handleKeyPress = (key) => {
    if (key.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div
      data-testid="tab-title"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={key => handleKeyPress(key)}
      className={`tabs__header__item ${active ? 'tabs__header__item--active' : ''}`}
    >
      {children}
    </div>
  );
};

const Content = ({ children, active }) => (
  <div
    data-testid="tab-content"
    className={`tabs__content ${active ? 'tabs__content--active' : ''}`}
  >
    {children}
  </div>
);

export const Tabs = ({ tabData }) => {
  const [visibleTab, setVisibleTab] = useState(tabData[0].id);
  return (
    <Fragment>
      <div className="tabs">
        <div className="tabs__header">
          {tabData.map(({ title, id }) => (
            <Title key={id} active={visibleTab === id} onClick={() => setVisibleTab(id)}>
              {title}
            </Title>
          ))}
        </div>
      </div>
      <div>
        {tabData.map(({ content, id }) => (
          <Content key={id} active={visibleTab === id}>
            {content}
          </Content>
        ))}
      </div>
    </Fragment>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  active: PropTypes.bool.isRequired,
};

Tabs.propTypes = {
  /**
   * An array of objects each containing 'title', 'content' and 'id' (which must be unique)
   */
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tabs;
