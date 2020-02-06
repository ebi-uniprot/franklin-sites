import React, { useState, Fragment } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/display-menu.scss';

const DisplayMenu = ({ data }) => {
  const defaultItem = data[0];
  const [openItem, setOpenItem] = useState(defaultItem && defaultItem.name);

  return (
    <Fragment>
      <nav className="display-menu">
        <ul className="no-bullet">
          {data.map(displayItem => (
            <li key={displayItem.name}>
              <Link
                to={`${displayItem.path}`}
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
      </nav>
      <section>
        <Switch>
          {data.map(displayItem => (
            <Route
              path={displayItem.path}
              render={() => <Fragment>{displayItem.mainContent}</Fragment>}
              key={displayItem.name}
              exact={displayItem.exact}
            />
          ))}
          <Route path="/">
            <Redirect to={defaultItem.path} />
          </Route>
        </Switch>
      </section>
    </Fragment>
  );
};

DisplayMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element,
      path: PropTypes.string.isRequired,
      itemContent: PropTypes.element,
      mainContent: PropTypes.element,
    })
  ).isRequired,
};

export default DisplayMenu;
