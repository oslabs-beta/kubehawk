import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip, Text, Link} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {GithubIcon} from '../icons/navbar/github-icon';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {ViewIcon} from '../icons/sidebar/view-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import {useSidebarContext} from '../layout/layout-context';
import {ChangeLogIcon} from '../icons/sidebar/changelog-icon';
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
                        isActive={router.pathname === '/clusters'}
                        title="Cluster List"
                        icon={<AccountsIcon />}
                        href="clusters"
                     />
                  </SidebarMenu>
                   <SidebarMenu title="Observable Metrics">    
                     <SidebarItem
                        isActive={router.pathname === '/payments'}
                        title="Alert Manager"
                        icon={<PaymentsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/customers'}
                        title="Cluster Resources"
                        icon={<CustomersIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/products'}
                        title="Cluster Network"
                        icon={<ProductsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="Node Exporter"
                        icon={<ReportsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="Kubelet"
                        icon={<ReportsIcon />}
                     />
               </SidebarMenu> 
               <SidebarMenu title="User Group Metrics">
                     <SidebarItem
                        title="Roles Based Access"
                        icon={<ChangeLogIcon />}
                        isActive={router.pathname === '/reports'}

                     />
                  </SidebarMenu>
                  <SidebarMenu title="Learn More">
                     <SidebarItem
                        title="Kubernetes Docs"
                        icon={<ChangeLogIcon />}
                        href="https://kubernetes.io/docs/home/"
                     />
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
