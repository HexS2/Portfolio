import Container from "../components/Container";
import { Box, Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { ImSmile } from "react-icons/im";
import { CloseButton } from "@chakra-ui/close-button";
import React from "react";
export default function Work() {
  const [display, setDisplay] = React.useState("true");
  return (
    <Container>
      <Alert status="warning" display={display}>
        <Box flex="1">
          <AlertTitle>Hey !</AlertTitle>
          <AlertDescription display="block">
            This page is under construction, come back soon ! <ImSmile />
          </AlertDescription>
        </Box>
        <CloseButton
          onClick={() => setDisplay("none")}
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
    </Container>
  );
}
