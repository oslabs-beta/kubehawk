import {Table} from '@nextui-org/react';
import React from 'react';
import  AddCluster  from '../clusterlist/add-cluster';
import {Box} from '../styles/box';
import {columns } from './data';
import {RenderCell} from './render-cell';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';

export const TableWrapper = () => {
   const { componentState, setComponentState } = useContext(StateContext)
   const clusters = componentState.clusters
   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
            },
         }}
      >
         <Table
            aria-label="Kubernetes Cluster List"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
            selectionMode="single"
         >
            <Table.Header columns={columns}>
               {(column) => (
                  <Table.Column
                     key={column.uid}
                     hideHeader={column.uid === 'actions'}
                     align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body items={clusters}>
               {(item) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {RenderCell({cluster: item, columnKey: columnKey})}
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
         </Table>
      </Box>
   );
};
