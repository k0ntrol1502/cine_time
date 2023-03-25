import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function ContactInfo() {
  return (
    <Box bg="gray.100" p="6" textAlign="center">
      <Heading as="h2" size="lg" mb="2">
        Contact Us
      </Heading>

      <Text fontSize="lg" mb="3">
        We'd love to hear from you!
      </Text>

      <Text fontSize="md" color="gray.600">
        Phone: (+91)6290911343
        <br />
        Email: ardewanji@gmail.com
      </Text>
    </Box>
  );
}

export default ContactInfo;
