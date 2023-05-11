import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
const AboutUs = () => {
  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4">
        About Us
      </Heading>
      <Text fontSize="xl" mb="4">
        At CineTime, we are passionate about providing our users with the best
        movie ticket booking experience. Our mission is to make it easy and
        convenient for movie lovers to book their tickets online.
      </Text>
      <Text fontSize="xl" mb="4">
        We have partnered with the best cinemas and theaters across the country
        to bring you the latest and greatest movies. With our easy-to-use
        platform, you can browse movies, select showtimes, choose your seats,
        and pay online - all from the comfort of your own home.
      </Text>
      <Text fontSize="xl" mb="4">
        We believe in providing exceptional customer service and support. If
        you have any questions or concerns, please don't hesitate to reach out to
        our friendly and knowledgeable support team.
      </Text>
      <br />
      <br />
      <a href="https://www.facebook.com/arya.dewanji.1/" target="_blank" rel="noopener noreferrer">
      <Button mr={5} colorScheme='facebook' leftIcon={<FaFacebook />} href="https://www.facebook.com/arya.dewanji.1/" target="_blank" rel="noopener noreferrer">
        Arya Dewanji
      </Button>
      </a>
      <a href="https://twitter.com/aryadewanji" target="_blank" rel="noopener noreferrer">
      <Button mr={5} colorScheme='twitter' leftIcon={<FaTwitter />} href ="https://twitter.com/aryadewanji">
        @AryaDewanji
      </Button>
      </a>
      <a href="https://github.com/k0ntrol1502" target="_blank" rel="noopener noreferrer">
      <Button colorScheme="teal"  leftIcon={<FaGithub />} href ="https://twitter.com/aryadewanji">
        @AryaDewanji
      </Button>
      </a>
    </Box>
  );
};

export default AboutUs;
