import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import SunburstChart from './SunburstChart';
import TreeGraph from './TreeGraph';
import ForceGraph from './ForceGraph';

const fileTypes = ['JSON', 'TXT'];

function DnD() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();
  const [sun, setSun] = useState(false);
  const [tree, setTree] = useState(false);
  const [force, setForce] = useState(false);

  const handleChange = (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('event.target.result');
      setData(event.target.result)
    };
    reader.readAsText(file);
  };

  const handleSun = () => {
    console.log(data)
    setSun(true);
  }
  const handleTree = () => {
    console.log(data)
    setTree(true);
  }
  const handleForce = () => {
    console.log(data)
    setForce(true);
  }

  return (
    <>
      <FileUploader handleChange={handleChange} name='file' types={fileTypes} />
      
      {data && <button onClick={handleSun}>Load the Sunburst Chart</button>}
      {data && <button onClick={handleTree}>Load the Tree Graph</button>}
      {data && <button onClick={handleForce}>Load the Force Chart</button>}

      {sun && <SunburstChart roles={JSON.parse(data)} />}
      {tree && <TreeGraph roles={JSON.parse(data)} />}
      {force && <ForceGraph roles={JSON.parse(data)} />}
    </>
  );
}

export default DnD;