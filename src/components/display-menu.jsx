import React, { useState, Fragment } from 'react';
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/display-menu.scss';
import SideBarLayout from '../layouts/SideBarLayout';

const DisplaySideBar = ({ data, defaultItemName, url }) => {
  const [openItem, setOpenItem] = useState(defaultItemName);

  return (
    <ul className="display-menu">
      <ul className="no-bullet">
        {data.map(displayItem => (
          <li key={displayItem.name}>
            <Link
              to={`${url}/${displayItem.path}`}
              onClick={() => setOpenItem(displayItem.name)}
              className={`display-menu__item_title ${
                openItem === displayItem.name
                  ? 'display-menu__item_title--active'
                  : ''
              }`}
            >
              <span className="display-menu__item_icon">
                {displayItem.icon && displayItem.icon}
              </span>
              {displayItem.name}
            </Link>
            <div
              className={`display-menu__item_content ${
                openItem === displayItem.name
                  ? 'display-menu__item_content--visible'
                  : ''
              }`}
            >
              {displayItem.itemContent}
            </div>
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
  defaultItemName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DisplayMenu;
