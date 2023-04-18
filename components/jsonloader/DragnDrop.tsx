import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import SunburstChart from "../charts/SunburstChart";
import TreeGraph from "../charts/TreeGraph";
import ForceGraph from "../charts/ForceGraph";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Text } from "@nextui-org/react";
import { DropIt } from "./DropIt";

const fileTypes = ["JSON", "TXT"];

export function DragnDrop() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();
  const [sun, setSun] = useState(false);
  const [tree, setTree] = useState(false);
  const [force, setForce] = useState(false);

  const handleChange = (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log("event.target.result");
      setData(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleSun = () => {
    console.log(data);
    setSun(true);
  };
  const handleTree = () => {
    console.log(data);
    setTree(true);
  };
  const handleForce = () => {
    console.log(data);
    setForce(true);
  };

  return (
    <Box css={{ overflow: "hidden", height: "100%" }}>
      <Flex
        direction={"column"}
        justify={"center"}
        css={{
          width: "100%",
          py: "$10",
          px: "$10",
          mt: "$8",
          "@sm": { px: "$20" },
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          css={{
            width: "100%",
            py: "$10",
            px: "$10",
            mt: "$8",
            "@sm": { px: "$20" },
          }}
        >
          <Text
            h3
            css={{
              textAlign: "center",
              "@sm": {
                textAlign: "inherit",
              },
            }}
          >
            Upload RBAC Data
          </Text>
          <DropIt />
        </Flex>
      </Flex>
      
    </Box>
  );
}

