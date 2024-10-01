import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box
    bg="red.300"
    p={4}
    color="white"
    textAlign="center"
    mt={8}
    borderRadius="md"
    boxShadow="md"
  >
    <Text fontFamily="Merriweather">Trivia: The Caesar cipher is a simple encryption technique that was used by Julius Caesar to send secret messages to his allies</Text>
  </Box>
);

export default Footer;
