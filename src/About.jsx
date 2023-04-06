import React from 'react';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from "@chakra-ui/icons";
const About = () => {
  return (
    <Stack spacing={3}>
    <Input variant='outlined' placeholder='Filled' />
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>
  </Stack>
  )
}

export default About;