import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      direction="column"
      marginTop="60px"
    >
      <HStack spacing={8} mb={8}>
        <Text color="gray.400">Made with ❤️ by h3x</Text>
      </HStack>
    </Flex>
  );
};

export default Footer;
