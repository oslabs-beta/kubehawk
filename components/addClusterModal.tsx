import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
// import { ClusterIP } from "./ClusterIP";
import { ClusterName } from "./ClusterName";

export default function ClusterModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
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
        onClose={closeHandler}
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
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Cluster Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Add a cluster
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
