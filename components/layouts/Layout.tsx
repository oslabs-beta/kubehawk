import { Box } from "./Box";
import Dashboard from "../Dashboard";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
<Dashboard />
  </Box>
);