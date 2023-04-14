
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<Tabs
  value={value}
  onChange={handleChange}
  aria-label="wrapped label tabs example"
>
  <Tab
    value="one"
    label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
    wrapped
  />
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>
  );
}
