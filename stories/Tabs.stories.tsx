import { useRef, useState, useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { Tabs, Tab, ConfigureIcon } from '../src/components';

export default {
  title: 'Layout/Tabs',
};

export const UnmanagedTabs = () => (
  <Tabs>
    <Tab
      title={
        <>
          Title 1
          <ConfigureIcon
            style={{ verticalAlign: 'text-top' }}
            width={16}
            height={16}
          />
        </>
      }
    >
      {loremIpsum({ count: 2 })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({ count: 2 })}</Tab>
    <Tab title="Title 3">{loremIpsum({ count: 2 })}</Tab>
  </Tabs>
);

export const UnmanagedTabsWithDifferentDefault = () => (
  <Tabs>
    <Tab
      title={
        <>
          Title 1
          <ConfigureIcon
            style={{ verticalAlign: 'text-top' }}
            width={16}
            height={16}
          />
        </>
      }
    >
      {loremIpsum({ count: 2 })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({ count: 2 })}</Tab>
    <Tab title="Title 3 (default)" defaultSelected>
      {loremIpsum({ count: 2 })}
    </Tab>
  </Tabs>
);

const options = ['option a', 'option 2', 'option III'];
const ManagedTabsComponent = () => {
  const interval = useRef<number>();

  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setSelected(options[Math.floor(Math.random() * options.length)]);
    }, 3000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <>
      <p>Selected: &quot;{selected}&quot;</p>
      <p>Will change automatically every 3 seconds</p>

      <Tabs active={selected}>
        <Tab
          title={
            <>
              Title 1 (not interactive)
              <ConfigureIcon
                style={{ verticalAlign: 'text-top' }}
                width={16}
                height={16}
              />
            </>
          }
          id={options[0]}
        >
          {loremIpsum({ count: 2 })}
        </Tab>
        <Tab title="Title 2 (not interactive)" id={options[1]}>
          {loremIpsum({ count: 2 })}
        </Tab>
        <Tab title="Title 3 (not interactive)" id={options[2]}>
          {loremIpsum({ count: 2 })}
        </Tab>
      </Tabs>
    </>
  );
};

export const ManagedTabs = () => <ManagedTabsComponent />;

export const CachedTabs = () => (
  <Tabs>
    <Tab
      cache
      title={
        <>
          Title 1
          <ConfigureIcon
            style={{ verticalAlign: 'text-top' }}
            width={16}
            height={16}
          />
        </>
      }
    >
      {loremIpsum({ count: 2 })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({ count: 2 })}</Tab>
    <Tab cache title="Title 3">
      {loremIpsum({ count: 2 })}
    </Tab>
  </Tabs>
);
