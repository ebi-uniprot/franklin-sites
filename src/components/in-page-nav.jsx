import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import '../styles/components/in-page-nav.scss';

const InPageNav = ({ sections, path, slug }) => {
  const history = useHistory();
  const match = useRouteMatch(path);

  const elementVisibility = useRef();
  const clickFlag = useRef(false);
  const marker = useRef();

  const sectionName = match.params[slug];

  // effect to connect user changes in scroll to browser history
  useEffect(() => {
    // get elements to watch from configured sections
    const elements = sections
      .map(section => document.querySelector(`[data-location="${section.id}"]`))
      .filter(Boolean);
    // add them to a map keeping there visibility state
    elementVisibility.current = new Map(
      elements.map(element => [element, true])
    );

    const replaceSlugRE = new RegExp(`:${slug}`);
    // Intersection Observer to watch when sections appear/disappear
    const io = new IntersectionObserver(entries => {
      // update the visibility map
      entries.forEach(entry =>
        elementVisibility.current.set(entry.target, entry.isIntersecting)
      );
      // if we are still withing a small time after a click, we ignore
      if (clickFlag.current) return;
      // find the first section visible (even partially)
      // eslint-disable-next-line no-restricted-syntax
      const [firstVisible] =
        Array.from(elementVisibility.current).find(([, visible]) => visible) ||
        [];
      if (!firstVisible) return; // 🤷🏽‍♂️
      // get its location from "data-location" attribute
      const { location } = firstVisible.dataset;
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

  // effect to connect user changes to history to sections displaying
  useEffect(() => {
    // find that scroll target section
    const element = document.querySelector(
      `[data-location="${decodeURI(sectionName)}"]`
    );

    if (!element) return;

    // scroll to its position
    element.scrollIntoView({ behavior: 'smooth' });
  }, [sectionName]);

  useEffect(() => {
    if (!(marker.current && marker.current.animate)) return;

    const target = marker.current.parentElement.querySelector('.active');
    if (!target) return;

    // get measurements
    const containerRect = marker.current.parentElement.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    marker.current.style.display = 'block';
    marker.current.animate(
      {
        transform: [
          `translateY(${targetRect.y - containerRect.y}px) scaleY(${
            targetRect.height
          })`,
        ],
      },
      {
        duration: 500,
        easing: 'cubic-bezier(.5,0,.35,1.25)',
        fill: 'both',
      }
    );
  }, [history.location.pathname]);

  // set a flag to ignore scroll-related events for 500ms
  const handleClick = useCallback(() => {
    clickFlag.current = true;
    setTimeout(() => {
      clickFlag.current = false;
    }, 500);
  }, []);

  return (
    <ul className="in-page-nav">
      <div ref={marker} className="marker" />
      {sections.map(section => (
        <li key={section.label} className={section.disabled && 'disabled'}>
          <NavLink
            to={`${section.id}`}
            activeClassName="active"
            onClick={handleClick}
          >
            {section.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default InPageNav;
