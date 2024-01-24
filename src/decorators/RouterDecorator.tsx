import type { StoryFn } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const ReactRouterDecorator = (Story: StoryFn) => (
  <MemoryRouter>
    <Routes>
      <Route path="/*" element={<Story />} />
    </Routes>
  </MemoryRouter>
);

export default ReactRouterDecorator;
