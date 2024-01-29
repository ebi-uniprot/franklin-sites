import { ReactNode } from 'react';
import { NavLink, Route, useLocation, useResolvedPath } from 'react-router-dom';
import cn from 'classnames';

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
  // TODO 2024: figure out how to get path
  // TODO 2024: can't have Route without being a child of Router
  const { pathname: path } = useLocation();
  console.log(path);
  const url = useResolvedPath('').pathname;
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
                className={({ isActive }) =>
                  cn({ 'display-menu__item_title--active': isActive })
                }
                end={displayItem.exact}
              >
                <span className="display-menu__item_icon">
                  {displayItem.icon && displayItem.icon}
                </span>
                {displayItem.name}
              </NavLink>
            </h5>
            <Route
              path={`${path}/${displayItem.path}${displayItem.exact ? '' : '*'}`}
            >
              <div className="display-menu__item_content">
                {displayItem.itemContent}
              </div>
            </Route>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default DisplayMenu;
