import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import '../styles/components/in-page-nav.scss';

const InPageNav = ({ sections, path, slug }) => {
  const history = useHistory();
  const match = useRouteMatch(path);

  const sectionName = match.params[slug];

  // effect to connect user changes in scroll to browser history
  useEffect(() => {
    // get elements to watch from configured sections
    const elements = sections
      .map(section => document.querySelector(`[data-location="${section.id}"]`))
      .filter(Boolean);

    const replaceSlugRE = new RegExp(`:${slug}`);
    // Intersection Observer to watch when sections appear/disappear
    const io = new IntersectionObserver(entries => {
      // find the first section visible (even partially)
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (!visibleEntry) return;
      // get its location from "data-location" attribute
      const { location } = visibleEntry.target.dataset;
      // calculate what would be the new path
      const newPath = path.replace(replaceSlugRE, location);
      // if it's the same than the current one, don't do anything
      if (newPath === history.location.pathname) return;
      // otherwise push a new entry in the browser history
      history.push(newPath);
    });

    // observe/unobserve logic
    elements.forEach(element => io.observe(element));
    return () => elements.forEach(element => io.unobserve(element));
  }, [sections, path, slug, history]);

  // effect to connect user changes to history to elements displaying
  useEffect(() => {
    // find that target element
    const element = document.querySelector(
      `[data-location="${decodeURI(sectionName)}"]`
    );

    if (!element) return;

    // scroll to its position
    element.scrollIntoView({ behavior: 'smooth' });
  }, [sectionName]);

  return (
    <div className="in-page-nav">
      {sections.map(section => (
        <li
          className={section.disabled && 'in-page-nav--disabled'}
          key={section.label}
        >
          <NavLink to={`${section.id}`} activeClassName="in-page-nav--active">
            {section.label}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default InPageNav;
