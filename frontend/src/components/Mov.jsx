import React from 'react';
import { Card,Image, CardBody, CardFooter, Stack, Heading, Button, Text, Divider, chakra } from '@chakra-ui/react';
import {Link} from "react-router-dom";
function Mov () {
  return (
    <>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={4}
  mb={4}>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://ik.imagekit.io/5if8ukbxw/images/DemonSlayer.jpeg?updatedAt=1680794969611'
    alt='Demon Slayer'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Demon Slayer: Kimetsu No Yaiba To The Swordsmith Village</Heading>

      <Text py='2'>
      Tanjiro Kamado, a boy whose family was killed by a demon, joins the Demon Slayer Corps 
      to turn his younger sister Nezuko back into a human after she was transformed into a demon.
      </Text>
    </CardBody>

    <CardFooter>
    <Link to="/book">
      <Button variant='solid' colorScheme='red' href='./Book.jsx' as={chakra.button}
      _hover={{ backgroundColor:"green.500" }}>
      Buy Ticket
      </Button></Link>
    </CardFooter>
  </Stack>
</Card>
<Divider />
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={4}
  mb={4}>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://ik.imagekit.io/5if8ukbxw/images/Pathaan.jpg?updatedAt=1680794969643'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Pathaan</Heading>

      <Text py='2'>
      A soldier caught by enemies and presumed dead comes 
      back to complete his mission, accompanied by old companions and foes.
      </Text>
    </CardBody>

    <CardFooter>
    <Link to="/book">
    <Button variant='solid' colorScheme='red' href='./Book.jsx' as={chakra.button}
      _hover={{ backgroundColor:"green.500" }}>
        Buy Ticket
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
<Divider />
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={4}
  mb={4}>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://ik.imagekit.io/5if8ukbxw/images/JohnWick4.jpg?updatedAt=1680794969427'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>John Wick: Chapter 4</Heading>

      <Text py='2'>
      John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. 
      With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, 
      from New York to Paris to Osaka to Berlin.
      </Text>
    </CardBody>

    <CardFooter>
    <Link to="/book">
    <Button variant='solid' colorScheme='red' href='./Book.jsx' as={chakra.button}
      _hover={{ backgroundColor:"green.500" }}>
      Buy Ticket
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
<Divider />
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={4}
  mb={4}>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://ik.imagekit.io/5if8ukbxw/images/kakkar.jpg?updatedAt=1680794969636'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Tu Jhoothi Mai Makkaar</Heading>

      <Text py='2'>
      Madness ensues when a `player` in the world of romantic relationships finds a girl who`s a worthy opponent. Tu Jhoothi Main Makkaar
       is a film that believes love is a battle of wits.
      </Text>
    </CardBody>

    <CardFooter>
    <Link to="/book">
    <Button variant='solid' colorScheme='red' href='./Book.jsx' as={chakra.button}
      _hover={{ backgroundColor:"green.500" }}>
      Buy Ticket
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
<Divider /> 
</>
  );
}
export default Mov;
