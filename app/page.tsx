"use client"

import Dashboard from "./dashboard";
import { StyledEngineProvider } from '@mui/material/styles';


export default function Page() {
    return (
    <StyledEngineProvider injectFirst>
      <Dashboard />
    </StyledEngineProvider>

    )

  }