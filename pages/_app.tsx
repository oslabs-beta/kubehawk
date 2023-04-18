import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {Layout} from '../components/layout/layout';
import {Content} from '../components/home/content';
import { StateContext } from '../context/StateContext';
import React, { useState } from 'react';
import { StateContextType } from '../context/StateContext';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps) {
   const [componentState, setComponentState] = useState<StateContextType['componentState']>(
      {
        clusters: [],
        currentTab: { ipAddress: '', clusterName: '' },
        currentTitle: undefined
      }
    );
  
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
         <StateContext.Provider value={{ componentState, setComponentState }}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
            </StateContext.Provider>
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
