import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import deskImage from '../Assets/image-hero-desktop.png';
import mobImage from '../Assets/image-hero-mobile.png';
import clint1 from '../Assets/client-audiophile.svg';
import clint2 from '../Assets/client-databiz.svg';
import clint3 from '../Assets/client-maker.svg';
import clint4 from '../Assets/client-meet.svg';
const Home = () => {
  const [isSmallerScreen] = useMediaQuery('(max-width: 768px)');
  const [direction, setDirection] = useState('row');
  const [order, setOrder] = useState('0');
  const [image, setImage] = useState(deskImage);
  const [gap, setGap] = useState('224px');
  const [textAlign, setTextAlign] = useState('');

  useEffect(() => {
    if (isSmallerScreen) {
      setDirection('column');
      setOrder('-1');
      setImage(mobImage);
      setGap('50');
      setTextAlign('center');
    } else {
      setDirection('row');
      setOrder('0');
      setImage(deskImage);
      setGap('224px');
      setTextAlign('');
    }
  }, [isSmallerScreen]);

  return (
    <>
      <Stack
        direction={direction}
        maxWidth={'1200px'}
        margin={'auto'}
        gap={gap}
      >
        <VStack
          textAlign={textAlign}
          alignItems={'flex-start'}
          justifyContent={'center'}
          gap={'50px'}
        >
          <h1>Make Remote Work</h1>
          <Text fontSize={'17px'} color={'grey'}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Text>
          <Box w={'100%'}>
            <Button
              className="button"
              fontWeight={'700'}
              border={'none'}
              p={'21px 34px'}
              borderRadius={'30px'}
              bgColor={'black'}
              color={'white'}
              transition={'all 0.3s'}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: 'black',
                },
              }}
            >
              Learn more
            </Button>
          </Box>
          <HStack
            justifyContent={'center'}
            width={'100%'}
            wrap={'wrap'}
            gap={'5%'}
          >
            <Image src={clint1} marginBottom={'20px'} />
            <Image src={clint2} marginBottom={'20px'} />
            <Image src={clint3} marginBottom={'20px'} />
            <Image src={clint4} marginBottom={'20px'} />
          </HStack>
        </VStack>
        <Box order={order} m={'10px'}>
          <Image src={image} objectFit="cover" width="100%" height="100%" />
        </Box>
      </Stack>
      <Text color={'grey'} textAlign={'center'} marginTop={30}>
        Challenge by <b>Frontend Mentor.</b> <br /> Coded by{' '}
        <a
          href="https://twitter.com/dev_palwar2"
          style={{ textDecoration: 'none' }}
        >
          Dev Palwar.
        </a>{' '}
      </Text>
    </>
  );
};

export default Home;
