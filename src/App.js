// src/App.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import CaesarCipher from './CaesarCipher';

const App = () => (
  <Box className="flex flex-col min-h-screen">
    <Header />
    <Box className="flex-grow">
      <CaesarCipher />
    </Box>
    <Footer />
  </Box>
);

export default App;
