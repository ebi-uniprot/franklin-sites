import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { sleep, schedule, frame } from 'timing-functions';
import cn from 'classnames';

import '../styles/components/in-page-nav.scss';

const GRANULARITY = 11;

const InPageNav = ({ sections, rootElement }) => {
  const history = useHistory();

  const [active, setActive] = useState(sections[0].id);

  const marker = useRef();
  const firstMarkerRender = useRef(true);

  // effect to connect user changes in scroll to browser history
  useEffect(() => {
    // get elements to watch from configured sections
    let elements = [];

    // Intersection Observer to watch when sections appear/disappear
    if (!('IntersectionObserver' in window)) {
      // 🤷🏽‍♂️ too bad...
      return;
    }

    const visibilityMap = new Map();

    const io = new window.IntersectionObserver(
      (entries) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const entry of entries) {
          // update the visibility map
          visibilityMap.set(entry.target, {
            height: entry.intersectionRect.height,
            ratio: entry.intersectionRatio,
          });
        }

        let mostVisible;
        let highestVisibility = 0;
        // eslint-disable-next-line no-restricted-syntax
        for (const [element, { height, ratio }] of visibilityMap.entries()) {
          // find the most visible element
          if (highestVisibility < height) {
            highestVisibility = height;
            mostVisible = element;
          }
          // stop at the first element completely visible
          // might happen when you have small sections
          if (ratio === 1) {
            break;
          }
        }

        if (mostVisible) {
          setActive(mostVisible.id);
        }
      },
      {
        threshold: Array.from({ length: GRANULARITY }).map(
          (_, i) => i / (GRANULARITY - 1)
        ),
      }
    );

    // sleep, to give the rest of the page a chance to start loading
    // schedule, to trigger only when the page has finished doing work
    // hopefully by then all the components are loaded
    sleep(250)
      .then(() => schedule(1000))
      .then(() => {
        // get elements to watch from configured sections
        elements = sections
          .map(({ id }) => document.querySelector(`#${id}`))
          .filter(Boolean);

        // eslint-disable-next-line no-restricted-syntax
        for (const element of elements) {
          io.observe(element);
          visibilityMap.set(element, 0);
        }
      });

    // eslint-disable-next-line consistent-return
    return () => elements.forEach((element) => io.unobserve(element));
  }, [sections, history]);

  // listen for changes in location hash to move corresponding element into view
  useEffect(() => {
    const unlisten = history.listen((location) => {
      const hash = location.hash.replace('#', '');
      frame().then(() => {
        if (hash) {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        } else if (rootElement) {
          document
            .querySelector(rootElement)
            ?.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
    return unlisten;
  }, [history, rootElement]);

  // move element into view on mount
  useEffect(() => {
    const hash = history.location.hash.replace('#', '');
    if (!hash) {
      // no hash to navigate to
      return;
    }
    // sleep, to give the rest of the page a chance to start loading
    // schedule, to trigger only when the page has finished doing work
    // hopefully by then all the components are loaded and in their right space
    sleep(1000)
      .then(() => schedule(1000))
      .then(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      });
  }, [history]); // history won't change, unlike location

  // move active marker
  useEffect(() => {
    // don't display an active marker if browser support is bad
    if (
      !(
        marker.current &&
        marker.current.animate &&
        'IntersectionObserver' in window
      )
    ) {
      return;
    }

    const target = marker.current.parentElement.querySelector('.active');
    if (!target) return;

    // get measurements
    const containerRect = marker.current.parentElement.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const currentMarkerRec = marker.current.getBoundingClientRect();

    marker.current.style.display = 'block';
    marker.current.animate(
      {
        transform: [
          `translateY(${currentMarkerRec.y - containerRect.y}px) scaleY(${
            currentMarkerRec.height
          })`,
          `translateY(${targetRect.y - containerRect.y}px) scaleY(${
            targetRect.height
          })`,
        ],
      },
      {
        duration: firstMarkerRender.current ? 0 : 250,
        // easing: 'cubic-bezier(.5,0,.35,1.25)', // overshoot
        easing: 'linear',
        fill: 'both',
      }
    );
    firstMarkerRender.current = false;
  }, [active]);

  return (
    <ul className="in-page-nav">
      <div ref={marker} className="marker" />
      {sections.map(({ id, label, disabled }) => (
        <li key={label} className={cn({ disabled })}>
          <Link to={`#${id}`} className={cn({ active: active === id })}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  rootElement: PropTypes.string,
};

InPageNav.defaultProps = {
  rootElement: undefined,
};

export default InPageNav;
