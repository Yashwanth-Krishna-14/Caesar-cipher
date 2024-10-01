import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { encrypt, decrypt } from './Cipher';
import './styles.css';

const CaesarCipher = () => {
    const [text, setText] = useState('');
    const [shift, setShift] = useState(0);
    const [result, setResult] = useState('');

    const handleEncrypt = () => {
        const shiftValue = parseInt(shift);
        if (isNaN(shiftValue) || shiftValue < 0 || shiftValue > 25) {
            setResult('Shift value must be between 0 and 25');
        } else {
            setResult(encrypt(text, shiftValue));
        }
    };

    const handleDecrypt = () => {
        const shiftValue = parseInt(shift);
        if (isNaN(shiftValue) || shiftValue < 0 || shiftValue > 25) {
            setResult('Shift value must be between 0 and 25');
        } else {
            setResult(decrypt(text, shiftValue));
        }
    };

    const handleClear = () => {
        setText('');
        setShift(0);
        setResult('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy text: ', err);
        });
    };

    return (
        <Box className="container">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box className="box">
                    <Heading as="h1" size="2xl" mb={8}>Caesar Cipher</Heading>
                    <VStack spacing={4}>
                        <Box>
                            <Text fontSize="lg" mb={2}>Text:</Text>
                            <Input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter text"
                                size="md"
                                className="input"
                            />
                        </Box>
                        <Box>
                            <Text fontSize="lg" mb={2}>Shift:</Text>
                            <Input
                                type="number"
                                value={shift}
                                onChange={(e) => setShift(e.target.value)}
                                placeholder="Enter a Number"
                                size="md"
                                className="input"
                            />
                        </Box>
                        <Box className="flex space-x-4">
                            <Button className="button-yellow" onClick={handleEncrypt}>Encrypt</Button>
                            <Button className="button-red" onClick={handleDecrypt}>Decrypt</Button>
                            <Button className="button-gray" onClick={handleClear}>Clear</Button>
                        </Box>
                        <Box>
                            <Heading as="h2" size="lg" mt={8}>Result:</Heading>
                            <Text className="result">{result}</Text>
                            <Button className="button-gray" onClick={handleCopy} mt={4}>Copy</Button>
                        </Box>
                    </VStack>
                </Box>
            </motion.div>
        </Box>
    );
};

export default CaesarCipher;
