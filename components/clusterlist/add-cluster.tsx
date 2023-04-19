import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { StateContext } from "../../context/StateContext";
import { StateContextType } from "../../context/StateContext";
import {dashTitles} from "../../context/StateContext"
interface AppState {
    clusters: { ipAddress: string; clusterName: string; }[];
    currentTab: { ipAddress: string; clusterName: string; };
    currentTitle: dashTitles;
  }
  
//   const initialState: AppState = {
//     clusters: [],
//     currentTab: { ipAddress: '', clusterName: '' }
//   };
  
  export default function AddCluster() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const [ipAddress, setIpAddress] = React.useState<string>('');
    const [clusterName, setClusterName] = React.useState<string>('');
  
    const { componentState, setComponentState }:StateContextType = useContext(StateContext)
    const handleIpAddressChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setIpAddress(e.target.value);
    };
    const handleClusterNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setClusterName(e.target.value);
    };
    const closeHandler = () => {
        setComponentState((prevState: AppState) => {
          const { clusters } = prevState;
          const newCluster = { ipAddress, clusterName };
          const newClusters = Array.isArray(clusters) ? [...clusters, newCluster] : [newCluster];
          console.log(componentState)
          return {
            ...prevState,
            clusters: newClusters,
            currentTab: {
              ipAddress: ipAddress,
              clusterName: clusterName
            }
          };
        });
        setVisible(false);
      };
      
  
    
    return (
      <div>
        <Button auto shadow onPress={handler}>
          Add Clusters
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={() => setVisible(false)}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              KubeHawk
              <Text b size={18}>
               
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Grafana Endpoint"
              aria-label="Grafana Endpoint"
              onChange={handleIpAddressChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Cluster Name"
              aria-label="Cluster Name"
              onChange={handleClusterNameChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={() => closeHandler()} aria-label="Close">
              Close
            </Button>
            <Button auto onPress={() => 
              closeHandler()} aria-label="Add a cluster">
              Add a cluster
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }