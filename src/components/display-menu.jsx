import React from 'react';
import { NavLink, Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/display-menu.scss';

const DisplayMenu = ({ data }) => {
  const { path, url } = useRouteMatch();
  const defaultItem = data[0];
  return (
    <ul className="display-menu">
      <ul className="no-bullet">
        {data.map(displayItem => (
          <li key={displayItem.name}>
            <h5>
              <NavLink
                to={`${url}/${displayItem.path}`}
                activeClassName="display-menu__item_title--active"
                className="display-menu__item_title"
              >
                <span className="display-menu__item_icon">
                  {displayItem.icon && displayItem.icon}
                </span>
                {displayItem.name}
              </NavLink>
            </h5>
            <Route
              path={`${path}/${displayItem.path}`}
              render={() => (
                <div className="display-menu__item_content">
                  {displayItem.itemContent}
                </div>
              )}
              exact={displayItem.exact}
            />
          </li>
        ))}
        <Route path="/">
          <Redirect to={`${url}/${defaultItem.path}`} />
        </Route>
      </ul>
    </ul>
  );
};

const dataPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element,
    path: PropTypes.string.isRequired,
    itemContent: PropTypes.element,
    mainContent: PropTypes.element,
  })
);

DisplayMenu.propTypes = {
  data: dataPropTypes.isRequired,
};

export default DisplayMenu;
