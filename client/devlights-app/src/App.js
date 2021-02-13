import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Badge,
  Center,
  Heading,
  Flex,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  theme,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

function App() {
  const [logsHistory, setLogsHistory] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const string = event.target['string'].value;
    console.log(event.target['string'].value);
    fetch('/api', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string: string }),
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(result => {
        let logDatetime = new Date();
        logDatetime = logDatetime.toString().split(' ').splice(1, 4).join(' ');
        setLogsHistory(prev => [
          { string: string, isValid: result.isValid, datetime: logDatetime },
          ...prev,
        ]);
        console.log(logsHistory);
      });
  }

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width="100%" maxW="700px" minH="100vh" p={3}>
          <Flex justify="flex-end" mb={10}>
            <ColorModeSwitcher />
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex align="center" my={4}>
              <Box flex="1" p="2">
                <Input required name="string" placeholder="Enter string" />
              </Box>

              <Box>
                <Button type="submit" colorScheme="teal" mr="4">
                  Submit
                </Button>
              </Box>
            </Flex>
          </form>
          <Divider />
          <Heading as="h4" size="lg" mt={4}>
            History
          </Heading>

          <Table mt={5} variant="simple">
            <Thead>
              <Tr>
                <Th>String</Th>
                <Th>Valid</Th>
                <Th>Datetime</Th>
              </Tr>
            </Thead>
            <Tbody>
              {logsHistory?.map(row => (
                <Tr>
                  <Td>{row.string}</Td>
                  <Td>
                    {row.isValid ? (
                      <Badge colorScheme="green">Yes</Badge>
                    ) : (
                      <Badge colorScheme="red">No</Badge>
                    )}
                  </Td>
                  <Td>{row.datetime}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
