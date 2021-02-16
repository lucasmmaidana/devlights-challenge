import React from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';

function Form({ onSubmitFunction }) {
  return (
    <form onSubmit={onSubmitFunction}>
      <Flex align="center" my={4}>
        <Box flex="1" p="2">
          <Input required name="string" placeholder="Enter a string" />
        </Box>

        <Box>
          <Button type="submit" colorScheme="teal" mr="4">
            Submit
          </Button>
        </Box>
      </Flex>
    </form>
  );
}

export default Form;
