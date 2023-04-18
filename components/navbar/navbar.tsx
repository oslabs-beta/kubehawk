import {Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {GithubIcon} from '../icons/navbar/github-icon';
import {SupportIcon} from '../icons/navbar/support-icon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {BurguerButton} from './burguer-button';
import { DarkModeSwitch } from './darkmodeswitch';

interface Props {
   children: React.ReactNode;
}

export const NavbarWrapper = ({children}: Props) => {

   return (
      <Box
         css={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
         }}
      >
         <Navbar
            isBordered
            css={{
               'borderBottom': '1px solid $border',
               'justifyContent': 'space-between',
               'width': '100%',
               '@md': {
                  justifyContent: 'space-between',
               },

               '& .nextui-navbar-container': {
                  'border': 'none',
                  'maxWidth': '100%',

                  'gap': '$6',
                  '@md': {
                     justifyContent: 'space-between',
                  },
               },
            }}
         >
            {/* RIGHT SIDE CONTENT */}
            <Navbar.Content>
               <BurguerButton/>
            </Navbar.Content>

            {/* LEFT SIDE CONTENT */}
            <Navbar.Content>  
               <Navbar.Content>
               <Link
                     href="https://github.com/oslabs-beta/kubehawk"
                     target={'_blank'}
                  >
                  <Text>
                     Documentation
                  </Text>
                  </Link>
               </Navbar.Content>
               <Navbar.Content>
                  <Link
                     href="https://github.com/oslabs-beta/kubehawk"
                     target={'_blank'}
                  >
                     <GithubIcon />
                  </Link>
               </Navbar.Content>
               <Navbar.Content>
                  <Link href="https://www.kubehawk.com"
                  target={'_blank'}>
                  <SupportIcon />
                  </Link>
               </Navbar.Content>
               <Navbar.Content>
                  <DarkModeSwitch />
               </Navbar.Content>
            </Navbar.Content>
         </Navbar>
         {children}
      </Box>
   );
};
