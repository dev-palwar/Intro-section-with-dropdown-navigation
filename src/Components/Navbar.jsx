import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import TodoIcon from '../Assets/icon-todo.svg';
import Calender from '../Assets/icon-calendar.svg';
import Planning from '../Assets/icon-planning.svg';
import Reminders from '../Assets/icon-reminders.svg';

import {
  Button,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import MobileMenu from './MobileMenu';


const Navbar = () => {
  const [isSmallerScreen] = useMediaQuery('(max-width: 1200px)');
  const [direction, setDirection] = useState('row');
  const [menu, setMenu] = useState('');
  const [display, setDisplay] = useState('');

  const toMobile = ()=>{
    <MobileMenu />
  }

  useEffect(() => {
    if (isSmallerScreen) {
      setMenu('');
      setDisplay('none');
    } else {
      setMenu('none');
      setDisplay('');
    }
  }, [isSmallerScreen]);

  return (
    <>
      <Stack
        maxWidth={'1200px'}
        direction={'row'}
        overflow={'hidden'}
        margin={'auto'}
        justifyContent={'space-between'}
      >
        <HStack gap={'3rem'}>
          <Heading fontSize={'40px'} marginLeft={20}>snap</Heading>
          <HStack display={isSmallerScreen ? 'none' : 'flex'}>
            <Menu>
              <MenuButton
                className="goUp"
                color={'grey'}
                as={Button}
                bg={'transparent'}
                border={'none'}
                cursor={'pointer'}
              >
                Features <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={TodoIcon}
                    mr="12px"
                  />
                  <span>Todo list</span>
                </MenuItem>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <Image
                    boxSize="1.2rem"
                    src={Reminders}
                    borderRadius="full"
                    mr="12px"
                  />
                  <span>Reminders</span>
                </MenuItem>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={Calender}
                    mr="12px"
                  />
                  <span>Calender</span>
                </MenuItem>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={Planning}
                    mr="12px"
                  />
                  <span>Planning</span>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                className="goUp"
                as={Button}
                bg={'transparent'}
                border={'none'}
                cursor={'pointer'}
                color={'grey'}
              >
                Company <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <span>Our team</span>
                </MenuItem>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <span>History</span>
                </MenuItem>
                <MenuItem
                  minH="48px"
                  border={'none'}
                  padding={'16px 0 10px 0'}
                  bgColor={'white'}
                >
                  <span>Blog</span>
                </MenuItem>
              </MenuList>
            </Menu>

            <h3 className="goUp">Careers</h3>
            <h3 className="goUp">About</h3>
          </HStack>
        </HStack>
        <HStack className="buttons" p={'.8rem 1.6rem'} m={'10px'}>
          <Text color={'grey'} className="goUp" display={display}>
            Login
          </Text>
          <Button
            display={display}
            className="goUp"
            transition={'all 0.2s'}
            border={'2px solid black'}
            padding={'14px 21px'}
            background={'transparent'}
            fontSize={'16px'}
            borderRadius={'99px'}
            color={'grey'}
          >
            Register
          </Button>
          <MobileMenu display={menu}/>
        </HStack>
      </Stack>
    </>
  );
};
export default Navbar;