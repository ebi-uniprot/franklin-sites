import React from 'react';
import { SwissProtIcon } from '..';

export const displayMenuDummyContent1 = 'Page 1 main content';
export const displayMenuDummyContent2 = 'Page 2 main content';
export const displayMenuDummyLeft1 = 'Something';
export const displayMenuDummyLeft2 = 'Something else';

export default [
  {
    name: 'Item 1',
    icon: <SwissProtIcon />,
    itemContent: (
      <ul className="no-bullet">
        <li>{displayMenuDummyLeft1}</li>
        <li>{displayMenuDummyLeft1}</li>
        <li>{displayMenuDummyLeft1}</li>
        <li>{displayMenuDummyLeft1}</li>
        <li>{displayMenuDummyLeft1}</li>
      </ul>
    ),
    path: '/main',
    mainContent: <div>{displayMenuDummyContent1}</div>,
  },
  {
    name: 'Item 2',
    icon: null,
    itemContent: <div>{displayMenuDummyLeft2}</div>,
    path: '/item2',
    mainContent: <div>{displayMenuDummyContent2}</div>,
  },
  {
    name: 'Item 3',
    path: '/item3',
    mainContent: <div>Page 3 main content</div>,
  },
];
