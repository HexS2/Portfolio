import Container from "../components/Container";
import { Box,Wrap,Flex,WrapItem,Avatar,Heading} from "@chakra-ui/react";
import { ImSmile } from "react-icons/im";
import { CloseButton } from "@chakra-ui/close-button";
import React from "react";
export default function Work() {
  const [display, setDisplay] = React.useState("true");
  return (
    <Container>
              <Box   flexDirection="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        marginTop="60px">       
        <Heading> Mes projets</Heading>
</Box>
 <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="60px"
        marginBottom="100px"
      >
        <Wrap>
  <WrapItem>
    <Avatar size="xl" backgroundColor="transparent"  name="Bloodshed" src="https://pbs.twimg.com/profile_images/1206171910687600640/s_W-uL2b_400x400.jpg" />
  </WrapItem>
  <WrapItem>
    <Avatar size="xl" backgroundColor="transparent"  name="Tolarys" src="https://pbs.twimg.com/profile_images/1077186393368080386/_8EA6n81_400x400.jpg" />
  </WrapItem>
  </Wrap>
      </Flex>
    </Container>
  );
}
