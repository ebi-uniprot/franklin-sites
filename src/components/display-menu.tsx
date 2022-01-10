import { ReactNode } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';

import '../styles/components/display-menu.scss';

type Props = {
  data: Array<{
    name: string;
    icon?: ReactNode;
    path: string;
    exact?: boolean;
    itemContent?: ReactNode;
    mainContent?: ReactNode;
  }>;
};

const DisplayMenu = ({ data }: Props) => {
  const { path, url } = useRouteMatch();
  return (
    <ul className="display-menu">
      <ul className="no-bullet">
        {data.map((displayItem) => (
          <li key={displayItem.name}>
            <h5 className="display-menu__item_title">
              <NavLink
                to={`${url}${
                  displayItem.path.length > 0
                    ? `/${displayItem.path}`
                    : displayItem.path
                }`}
                activeClassName="display-menu__item_title--active"
                exact={displayItem.exact}
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

export default DisplayMenu;
