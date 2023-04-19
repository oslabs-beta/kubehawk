import React from 'react';
import {Collapse} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';
import AddCluster from '../clusterlist/add-cluster';
import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
export const Content = () => {
   const {componentState, setComponentState} = useContext(StateContext)
   const name:string | undefined = componentState.currentTab.name
   return(
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
            <Collapse title={`${name}` || 'Welcome, please add a cluster'} shadow expanded>
         <TableWrapper />
         </Collapse>
      </Flex>
      <Flex
         css={{
            'gap': '$8',
            'pt': '$5',
            'height': 'fit-content',
            'flexWrap': 'wrap',
            '@lg': {
               flexWrap: 'nowrap',
            },
            '@sm': {
               pt: '$10',
            },
         }}
         justify={'center'}
      >

         <Flex
            css={{
               'px': '$12',
               'mt': '$8',
               '@xsMax': {px: '$10'},
               'gap': '$12',
            }}
            direction={'column'}
         >
            <AddCluster/>
         </Flex>
      </Flex>
   </Box>
);
}
