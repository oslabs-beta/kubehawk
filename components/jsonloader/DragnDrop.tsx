import React, { useState } from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Text } from "@nextui-org/react";
import DnD from "./DnD";

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
      setData(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleSun = () => {
    setSun(true);
  };
  const handleTree = () => {
    setTree(true);
  };
  const handleForce = () => {
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
            <DnD />
        </Flex>
      </Flex>
      
    </Box>
  );
}

