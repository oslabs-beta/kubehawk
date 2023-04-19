import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import dynamic from 'next/dynamic';

const SunburstChart = dynamic(() => import('../charts/SunburstChart'));

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
      setData(event.target.result);
      setSun(true);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <FileUploader handleChange={handleChange} name='file' types={fileTypes} />
      {sun && <SunburstChart roles={JSON.parse(data)} />}
    </>
  );
}

export default DnD;
