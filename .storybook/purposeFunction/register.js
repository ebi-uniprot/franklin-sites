import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'purposefunction';
const PARAM_KEY = 'purposeFunction';
const PANEL_ID = `${ADDON_ID}/panel`;

const PurposeFunctionPanel = () => {
  const value = useParameter(PARAM_KEY, null);

  return (
    value && (
      <div style={{ padding: '1rem' }}>
        <div>
          <h2>Purpose</h2>
          <p>{value.purpose}</p>
        </div>
        <div>
          <h2>Function</h2>
          <p>{value.function}</p>
        </div>
      </div>
    )
  );
};

export default PurposeFunctionPanel;

addons.register(ADDON_ID, () => {
  // eslint-disable-next-line react/prop-types
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <PurposeFunctionPanel />
    </AddonPanel>
  );
  const title = 'Purpose and Function';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});
