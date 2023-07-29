import React, { useState } from 'react';
import { Collapse, Box, Button } from '@chakra-ui/react';

const CollapsingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleToggle}>Toggle Menu</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p={4} bg="gray.100" shadow="md">
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </Box>
      </Collapse>
    </>
  );
};

export default CollapsingMenu;
