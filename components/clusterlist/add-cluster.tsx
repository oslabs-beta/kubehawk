import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { StateContext } from "../../context/StateContext";
import { StateContextType } from "../../context/StateContext";
import {dashTitles} from "../../context/StateContext"
interface AppState {
    clusters: { name: string; IPaddress: string; }[];
    currentTab: { id: number; name: string; IPaddress: string; };
    currentTitle: dashTitles;
  }
  
  
  export default function AddCluster() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const [IPaddress, setIPaddress] = React.useState<string>('');
    const [name, setClusterName] = React.useState<string>('');
    const { componentState, setComponentState }:StateContextType = useContext(StateContext)
    const id = componentState.clusters.length

    const handleIPaddressChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setIPaddress(e.target.value);
    };
    const handleClusterNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setClusterName(e.target.value);
    };
    const closeHandler = () => {
        setComponentState((prevState: AppState) => {
          const { clusters } = prevState;
          const newCluster = { id, name, IPaddress };
          const newClusters = Array.isArray(clusters) ? [...clusters, newCluster] : [newCluster];
          console.log(componentState)
          return {
            ...prevState,
            clusters: newClusters,
            currentTab: {
               id: clusters.length,
              name: name,
              IPaddress: IPaddress
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
              onChange={handleIPaddressChange}
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