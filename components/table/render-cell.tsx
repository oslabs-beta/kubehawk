import {Col, Row, Button, Text, Tooltip} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {clusters} from './data';
import {IconButton} from './table.styled';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';

interface currentTab {
   id: number;
   name: string;
   IPaddress: string;
}
interface Props {
   cluster: typeof clusters[number];
   columnKey?: string | React.Key;
}


export const RenderCell = ({cluster, columnKey}: Props) => {
   // @ts-ignore
   const id:number | undefined = cluster.id
   const name:string = cluster.name
   const IPaddress:string = cluster.IPaddress
   const { componentState, setComponentState } = useContext(StateContext)

   const setCurrentTab = ({id, name, IPaddress}:currentTab) => {
   setComponentState((prevState) => {
      return {
         ...prevState,
         currentTab: { 
         id: id,
         name: name,
         IPaddress: IPaddress
         }
      };
   });
   };
   const cellValue = cluster[columnKey];
   switch (columnKey) {
      case 'name':
         return (
            <Row>
            <Text
               b
               size={13}
               css={{tt: 'capitalize', color: '$accents7'}}
            >
               {cluster.name}
            </Text>
         </Row>
         );
      case 'role':
         return (
            <Col>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{tt: 'capitalize', color: '$accents7'}}
                  >
                     {cluster.IPaddress}
                  </Text>
               </Row>
            </Col>
         );

      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{'gap': '$8', '@md': {gap: 0}}}
            >
               <Col css={{d: 'flex'}}>
                  <Tooltip content="Edit cluster">
                     
                     <IconButton
                        onClick={() => console.log('Edit cluster', cluster.id)}
                     >
                        <EditIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
               <Tooltip color="error">
                     <Button onPress={() => setCurrentTab({id, name, IPaddress})}>
                     Select Cluster
                     </Button>
               </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="Delete cluster"
                     color="error"
                     onClick={() => console.log('Delete cluster', cluster.id)}
                  >
                     <IconButton>
                        <DeleteIcon size={20} fill="#FF0080" />
                     </IconButton>
                  </Tooltip>
               </Col>

            </Row>
         );
      default:
         return cellValue;
   }
};
