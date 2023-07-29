import React, { useEffect, useRef, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Input,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Collapse, Box } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import TodoIcon from '../Assets/icon-todo.svg';
import Calender from '../Assets/icon-calendar.svg';
import Planning from '../Assets/icon-planning.svg';
import Reminders from '../Assets/icon-reminders.svg';

const MobileMenu = ({ display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [menu1, setIsOpen] = useState(false);
  const [menu2, setIsOpen2] = useState(false);
  const [up, setUp] = useState(false);
  const [up2, setUp2] = useState(false);

  const handleToggle = () => {
    setIsOpen(!menu1);
  };
  const handleToggle2 = () => {
    setIsOpen2(!menu2);
  };
  const goUp = () => {
    setUp(!up)
  };
  const goUp2 = () => {
    setUp2(!up2)
  };


  return (
    <>
      <Button
        ref={btnRef}
        cursor={'pointer'}
        colorScheme="teal"
        onClick={onOpen}
        display={display}
        bgColor={'transparent'}
        border={'none'}
        fontSize={'24px'}
      >
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          className="drawerr"
          bgColor={'white'}
          size="50%"
          style={{ width: '50vw', paddingTop: '10vw' }}
        >
          <VStack gap={'25px'} alignItems={'self-start'} marginLeft={'20px'}>
            <h1 onClick={onClose}>
              <CloseIcon
                boxSize={15}
                position={'absolute'}
                right={10}
                top={10}
              />
            </h1>
            <Button
              onClick={() => {
                handleToggle();
                goUp();
              }}
              border={'none'}
              bgColor={'transparent'}
              fontSize={'20px'}
            >
              Features{' '}
              <ChevronDownIcon className={up ? 'downArrow' : 'upArrow'} />
            </Button>
            <Collapse in={menu1} animateOpacity>
              <VStack p={4} bg="gray.100" shadow="md">
                <Box>
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={TodoIcon}
                    mr="12px"
                  />
                  <span>Todo list</span>
                </Box>
                <br />
                <Box>
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={Reminders}
                    mr="12px"
                  />
                  <span>Reminder</span>
                </Box>
                <br />
                <Box>
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={Calender}
                    mr="12px"
                  />
                  <span>Calender</span>
                </Box>
                <br />
                <Box>
                  <Image
                    boxSize="1.2rem"
                    borderRadius="full"
                    src={Planning}
                    mr="12px"
                  />
                  <span>Plannig</span>
                </Box>
                <br />
              </VStack>
            </Collapse>

            <Button
              onClick={() => {
                handleToggle2();
                goUp2();
              }}
              border={'none'}
              bgColor={'transparent'}
              fontSize={'20px'}
            >
              Company
              <ChevronDownIcon
                onClick={goUp}
                className={up2 ? 'downArrow' : 'upArrow'}
              />
            </Button>
            <Collapse in={menu2} animateOpacity>
              <Box p={4} bg="gray.100" shadow="md">
                <p>Our Team</p>
                <br />
                <p>History</p>
                <br />
                <p>Blog</p>
                <br />
              </Box>
            </Collapse>
            <p style={{ fontSize: '16px' }}>Career</p>
            <p style={{ fontSize: '16px' }}>About</p>
          </VStack>
          <DrawerBody bgColor={'red'}></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
