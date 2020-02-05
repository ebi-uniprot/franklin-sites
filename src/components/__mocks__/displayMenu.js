import React from 'react';

export default [
  {
    name: 'Item 1',
    icon: null,
    itemContent: (
      <ul className="no-bullet">
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
      </ul>
    ),
    path: '/main',
    mainContent: <div>Page 1 main content</div>,
  },
  {
    name: 'Item 2',
    icon: null,
    itemContent: <div>Something else</div>,
    path: '/item2',
    mainContent: <div>Page 2 main content</div>,
  },
  {
    name: 'Item 3',
    path: '/item3',
    mainContent: <div>Page 3 main content</div>,
  },
];
