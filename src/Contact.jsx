import React from "react";
import { Box, Heading, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react'
function ContactInfo() {
  return (
    <Box bg="gray.100" p="6" textAlign="center" justifyContent='center'>
      <Heading as="h2" size="lg" mb="2">
        Contact Us
      </Heading>
<br />
<br />
      {/* <Text fontSize="lg" mb="3">
        We'd love to hear from you!
      </Text>

      <Text fontSize="md" color="gray.600">
        Phone: (+91)6290911343
        <br />
        Email: ardewanji@gmail.com
      </Text> */}
      <Flex>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' />
      </FormControl>
      <FormControl isRequired m1={4}>
         <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' />
      </FormControl>
      </Flex>
      <br />
      <FormControl isRequired>
      <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder="Enter your work email"/>
      </FormControl>
      <br />
      <br />
      <Textarea  size="md" placeholder='Describe in a few lines what you want to contact us with' />
      <br />
      <br />
      <Button colorScheme='teal' variant='solid'>
          Submit
      </Button>
    </Box>
  );
}

export default ContactInfo;
