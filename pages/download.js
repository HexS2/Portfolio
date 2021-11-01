import Container from "../components/Container";
import {
  Box,
  Image,
  Flex,
  Badge,
  Link,
  Wrap,
  WrapItem,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ImSmile } from "react-icons/im";
import { CloseButton } from "@chakra-ui/close-button";
import React from "react";
export default function Download() {
  const [display, setDisplay] = React.useState("true");
  const property = {
    imageUrl:
      "https://i.pinimg.com/originals/29/a0/b4/29a0b495840516b71597e6674fe72256.jpg",
    imageAlt: "project picture",
    alertShow: "true",
  };
  return (
    <Container>
      <Alert status="success" display={display}>
        <ImSmile />
        <Box flex="1">
          <AlertTitle>Hey !</AlertTitle>
          <AlertDescription display="block">
            Please disable your addblocker to access download
          </AlertDescription>
        </Box>
        <CloseButton
          onClick={() => setDisplay("none")}
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="60px"
      >
        <Wrap spacing="30px" justify="center">
          <WrapItem>
            <Box
              _hover={{ boxShadow: "2xl", transition: "0.5s" }}
              maxW="sm"
              boxShadow="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    MOUNTAIN-2.0.2-SNAPSHOT
                  </Badge>
                  <Badge variant="solid" colorScheme="orange" ml="15px">
                    SPIGOT-PLUGIN
                  </Badge>
                </Box>
              </Box>
              <Wrap
                spacing="30px"
                align="center"
                justify="right"
                mb="15px"
                mr="15px"
              >
                <WrapItem>
                  <Link
                    href="https://www.spigotmc.org/resources/glowstone-mountain-evolved-hcf-1-10-1-9-1-8-1-7-mutli-area-mountain-type.26772/"
                    isExternal
                    mx="10px"
                  >
                    Go to details <ExternalLinkIcon mx="2px" />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="green" variant="solid">
                    <Link href="http://j.gs/B4DE" isExternal>
                      <DownloadIcon /> Download
                    </Link>
                  </Button>
                </WrapItem>
              </Wrap>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              _hover={{ boxShadow: "2xl", transition: "0.5s" }}
              maxW="sm"
              boxShadow="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    CLEARLAG-1.0.0-RELEASE
                  </Badge>
                  <Badge variant="solid" colorScheme="orange" ml="15px">
                    SPIGOT-PLUGIN
                  </Badge>
                </Box>
              </Box>
              <Wrap
                spacing="30px"
                align="center"
                justify="right"
                mb="15px"
                mr="15px"
              >
                <WrapItem>
                  <Link
                    href="https://www.spigotmc.org/resources/antilag-plugin-mob-clear-item-clear-1-7-1-8.29719/"
                    isExternal
                    mx="10px"
                  >
                    Go to details <ExternalLinkIcon mx="2px" />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="green" variant="solid">
                    <Link href="http://j.gs/Fwkk" isExternal>
                      <DownloadIcon /> Download
                    </Link>
                  </Button>
                </WrapItem>
              </Wrap>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              _hover={{ boxShadow: "2xl", transition: "0.5s" }}
              maxW="sm"
              boxShadow="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    SUPERTABLIST-1.0.0-RELEASE
                  </Badge>
                  <Badge variant="solid" colorScheme="orange" ml="15px">
                    SPIGOT-PLUGIN
                  </Badge>
                </Box>
              </Box>
              <Wrap
                spacing="30px"
                align="center"
                justify="right"
                mb="15px"
                mr="15px"
              >
                <WrapItem>
                  <Link
                    href="https://www.spigotmc.org/resources/supertablist-simple-sorted-tablist-1-7-1-8-1-9.60806/"
                    isExternal
                    mx="10px"
                  >
                    Go to details <ExternalLinkIcon mx="2px" />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="green" variant="solid">
                    <Link href="http://q.gs/EQhVq" isExternal>
                      <DownloadIcon /> Download
                    </Link>
                  </Button>
                </WrapItem>
              </Wrap>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  );
}
