import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => (
  <Box
    bg="red.300"
    p={4}
    color="white"
    textAlign="center"
    borderRadius="md"
    boxShadow="md"
  >
    <Heading as="h1" size="lg" fontFamily="Playfair Display">Cryptography Tool</Heading>
  </Box>
);

export default Header;
