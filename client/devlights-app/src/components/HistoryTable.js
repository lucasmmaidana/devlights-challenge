import React from 'react';
import {
  Badge,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

function HistoryTable({ data }) {
  return (
    <>
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
          {data?.map(row => (
            <Tr key={row.datetime}>
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
    </>
  );
}

export default HistoryTable;
