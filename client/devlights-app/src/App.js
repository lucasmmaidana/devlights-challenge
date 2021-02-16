import React, { useState } from 'react';

import Form from './components/Form';
import HistoryTable from './components/HistoryTable';

import isValid from './api';

import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import {
  ChakraProvider,
  Box,
  Center,
  Flex,
  theme,
  Divider,
} from '@chakra-ui/react';

function App() {
  const [logsHistory, setLogsHistory] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const string = event.target['string'].value;

    const result = await isValid(string);

    const logDatetime = new Date();
    const logDatetimeFormated = logDatetime
      .toString()
      .split(' ')
      .splice(1, 4)
      .join(' ');

    setLogsHistory(prev => [
      {
        string: string,
        isValid: result.isValid,
        datetime: logDatetimeFormated,
      },
      ...prev,
    ]);
  }

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width="100%" maxW="800px" minH="100vh" p={7}>
          <Flex justify="flex-end" mb={10}>
            <ColorModeSwitcher />
          </Flex>
          <Form onSubmitFunction={handleSubmit} />
          <Divider />
          <HistoryTable data={logsHistory} />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
