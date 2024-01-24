import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';
import { InPageNav as InPageNavComponent } from '../src/components';

const sections = [
  {
    id: 'id1',
    label: 'First link',
  },
  {
    id: 'id2',
    label: 'Second link',
  },
  {
    id: 'id3',
    label: 'Third link',
    disabled: true,
  },
  {
    id: 'id4',
    label: 'Fourth link',
  },
];

export default {
  title: 'Navigation/In Page Navigation',
  parameters: {
    purposeFunction: {
      purpose:
        'Help with navigation, give an idea of the position on a very long page.',
      function: 'Quickly navigate to different sections of the current page.',
    },
  },
};

const content = [
  <>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
  </>,
  <>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
  </>,
  <>
    <p>{loremIpsum()}</p>
    <p>{loremIpsum()}</p>
  </>,
];

const Demo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabled={navigate.index === 0}
        type="button"
        className="button"
        onClick={() => navigate(-1)}
      >
        Browser back
      </button>
      <code style={{ margin: '0 1ch' }}>
        pathname:
        {location.pathname}
        {location.hash}
      </code>
      <button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabled={navigate.index + 1 === navigate.length}
        type="button"
        className="button"
        onClick={() => navigate(1)}
      >
        Browser forward
      </button>
      <div style={{ border: '1px solid black' }}>
        <div style={{ height: '200px', display: 'flex' }}>
          <div style={{ width: '200px' }}>
            <InPageNavComponent
              sections={sections}
              rootElement=".main-content"
            />
          </div>
          <main className="main-content" style={{ overflow: 'scroll' }}>
            <section id="id1">
              <h1>first section</h1>
              {content[0]}
            </section>
            <section id="id2">
              <h1>second section</h1>
              {content[1]}
            </section>
            <section id="id4">
              <h1>fourth section</h1>
              {content[2]}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export const InPageNav = () => (
  <MemoryRouter initialEntries={['/initial/path']}>
    <Demo />
  </MemoryRouter>
);
