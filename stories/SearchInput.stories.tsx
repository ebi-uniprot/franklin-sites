import { useState } from 'react';
import { SearchInput as SI } from '../src/components';

export default {
  title: 'Forms/Search Input',
};

export const SearchInput = () => {
  const [value, setValue] = useState('');

  return (
    <SI
      placeholder="Search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
