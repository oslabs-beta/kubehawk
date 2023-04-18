import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";
import {GiBirdTwitter} from "react-icons/gi"
import { VariantsSelectorWrapper } from "../components/layouts/VariantsSelectorWrapper";


export default function TopNav() {
  const variant = "sticky";
  
  return (
    <Layout>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <GiBirdTwitter />
          <Text color="inherit" hideIn="xs">
            KubeHawk
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="https://github.com/oslabs-beta/kubehawk">
            Documentation
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>      
    </Layout>
  )
}