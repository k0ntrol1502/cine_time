import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

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
    </Box>
  );
};

export default AboutUs;
