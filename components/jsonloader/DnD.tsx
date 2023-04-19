import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import dynamic from 'next/dynamic';
import { Box } from '../styles/box';
import { Flex } from '@mantine/core';

const DemoSunburst = dynamic(() => import('./DemoSunburst'));

const fileTypes = ['JSON', 'TXT'];

function DnD() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();
  const [sun, setSun] = useState(false);

  const handleChange = (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('event.target.result');
      setData(JSON.parse(event.target.result));
      setSun(true);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <FileUploader handleChange={handleChange} name='file' types={fileTypes} />
      <Box css={{overflow: 'hidden', height: '100%'}}>
       <Flex
         direction={'column'}
         justify={'center'}
         css={{
            'width': '100%',
            'py': '$10',
            'px': '$10',
            'mt': '$8',
            '@sm': {px: '$20'},
         }}
      >
      {sun && <DemoSunburst roles={data} />}
      </Flex>
      </Box>
    </>
  );
}

export default DnD;
