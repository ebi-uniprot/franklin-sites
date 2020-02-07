import React, { Fragment } from 'react';
import {
  NavLink,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/display-menu.scss';
import SideBarLayout from '../layouts/SideBarLayout';

const DisplaySideBar = ({ data, url, path }) => {
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
      </ul>
    </ul>
  );
};

const DisplayMenu = ({ data }) => {
  const defaultItem = data[0];
  const { path, url } = useRouteMatch();

  const sidebar = (
    <DisplaySideBar
      data={data}
      defaultItemName={defaultItem && defaultItem.name}
      url={url}
      path={path}
    />
  );

  return (
    <Fragment>
      <SideBarLayout sidebar={sidebar}>
        <section>
          <Switch>
            {data.map(displayItem => (
              <Route
                path={`${path}/${displayItem.path}`}
                render={() => <Fragment>{displayItem.mainContent}</Fragment>}
                key={displayItem.name}
                exact={displayItem.exact}
              />
            ))}
            <Route path="/">
              <Redirect to={`${url}/${defaultItem.path}`} />
            </Route>
          </Switch>
        </section>
      </SideBarLayout>
    </Fragment>
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

DisplaySideBar.propTypes = {
  data: dataPropTypes.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default DisplayMenu;
