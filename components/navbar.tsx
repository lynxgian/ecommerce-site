import { useUser } from '@auth0/nextjs-auth0/client';
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

interface LinkType {
  name: string;
  url: string;
}

interface ComponentType {
  session?: string;
}

const Links: Array<LinkType> = [
  { name: 'Home', url: '/' },
  { name: 'Items', url: '/items' },
  { name: 'About Us', url: '/aboutus' },
];

const NavLink = ({ name, url }: LinkType) => (
    <ChakraLink as={'a'} href={url}>{name}</ChakraLink>
);

const NotLoggedInItems = [
    {name: 'Sign In', url: '/api/auth/login'},
    {name: 'Sign Up', url: '/api/auth/signup'}
    
]
const LoggedInItems = (session: string) => [
    {name: 'User Info', url: `/user/${session}`},
    {name: 'LogOut', url: '/api/auth/logout'}
    
]

const UserItems = ({ name, url }: LinkType) => (

    <MenuItem as={'a'} href={url}>
      {name}
    </MenuItem>
  );

export default function NavBar({cart}) {
  const {user} = useUser()
  const [items, setItems] = useState([cart])
  return (
    <>
      <Box bg={'gray'} width={'100%'} top={0} px={4} position={'sticky'} >
        <Flex h={16} justifyContent={'space-between'} alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Text>Company Name</Text>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((x, key) => (
                <NavLink name={x.name} url={x.url} key={key} />
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={'button'} rounded={'full'} cursor={'pointer'} minW={0}>
                <Avatar />
              </MenuButton>
              <MenuList>
              {!user ? 
                 NotLoggedInItems.map((x, key) => (
                    <UserItems name={x.name} url={x.url} key={key} />
                 ))
               : 
                LoggedInItems(user?.sub?.split('|')[1]!).map((x, key) => (
                    <UserItems name={x.name} url={x.url} key={key}/>
                ) )
                
            }
              </MenuList> 
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
