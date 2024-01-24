import { MemoryRouter, Routes, Route } from 'react-router-dom';

const ReactRouterDecorator: DecoratorFn = (Story) => (
  <MemoryRouter>
    <Routes>
      <Route path="/*" element={<Story />} />
    </Routes>
  </MemoryRouter>
);

export default ReactRouterDecorator;
