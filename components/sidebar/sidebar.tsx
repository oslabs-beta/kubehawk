import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Tooltip, Text, Link, Button} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {GithubIcon} from '../icons/navbar/github-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';
import {useSidebarContext} from '../layout/layout-context';
import { ViewIcon } from '../icons/sidebar/view-icon';
// import { KubeHawkIcon } from '../icons/sidebar/kubehawk-icon'; 
import {useRouter} from 'next/router';

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();


   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
            <Box>
               <Flex align={'center'} css={{gap: '$7'}}>
                  <Box>
                     <Link
                     href='/'
                     >
                     <Text
                        h3
                        size={'$xl'}
                        weight={'medium'}
                        css={{
                           m: 0,
                           color: '$accents9',
                           lineHeight: '$lg',
                           mb: '-$5',
                        }}
                     >
                        KubeHawk
                     </Text>
                     </Link>
                  </Box>
               </Flex>
            </Box>
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarMenu title="Clusters">
                     <SidebarItem
                        title="Cluster List"
                        icon={<AccountsIcon />}
                        href="clusters"
                     />
                  </SidebarMenu>
                   <SidebarMenu title="Observable Metrics">    
                     <SidebarItem
                        title="Alert Manager"
                        icon={<PaymentsIcon />}
                        dashTitle="AlertManager"
                        href='dashboard'
                     />
                     <SidebarItem
                        title="Cluster Resources"
                        icon={<CustomersIcon />}
                        dashTitle="ClusterResources"
                        href='dashboard'

                     />
                     <SidebarItem
                        title="Cluster Network"
                        icon={<ProductsIcon />}
                        dashTitle="ClusterNetwork"
                        href='dashboard'

                     />
                     <SidebarItem
                        title="Node Exporter"
                        icon={<ReportsIcon />}
                        dashTitle="NodeExporter"
                        href='dashboard'

                     />
                     <SidebarItem
                        title="Kubelet"
                        icon={<ViewIcon />}
                        dashTitle="Kubelet"
                        href='dashboard'

                     />
               </SidebarMenu> 
               <SidebarMenu title="User Group Metrics">
                     <SidebarItem
                        title="Roles Based Access"
                        icon={<ChangeLogIcon />}
                        href='dragndrop'

                     />
                  </SidebarMenu>
                  <SidebarMenu title="Learn More">
                        <Link 
                        href="https://kubernetes.io/docs/home/"
                        target={'_blank'}>
                           <Text>
                              <Button color="gradient" >Kubernetes Docs</Button>
                           </Text>
                        </Link>
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Documentation'} rounded color="primary">
                  <Link
                     href="https://github.com/oslabs-beta/kubehawk"
                     target={'_blank'}>
                     <GithubIcon />
                  </Link>
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
