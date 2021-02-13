import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import HistoryTable from './components/HistoryTable';
import {
  ChakraProvider,
  Box,
  Center,
  Flex,
  theme,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

function App() {
  const [logsHistory, setLogsHistory] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const string = event.target['string'].value;

    fetch('/api', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string: string }),
    })
      .then(res => res.json())
      .then(result => {
        let logDatetime = new Date();
        logDatetime = logDatetime.toString().split(' ').splice(1, 4).join(' ');
        setLogsHistory(prev => [
          { string: string, isValid: result.isValid, datetime: logDatetime },
          ...prev,
        ]);
      })
      .catch(error => console.error('Error:', error));
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
