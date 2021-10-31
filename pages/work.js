import Container from "../components/Container";
import { Box, Image, Flex, Badge, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function Work() {
  const property = {
    imageUrl: "https://bloodshed.fr/background-v2.png",
    imageAlt: "project picture",
  };
  return (
    <Container>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="60px"
      >
        <Box
          _hover={{ boxShadow: "2xl", transition: "0.5s" }}
          maxW="xl"
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge ml="1" fontSize="0.8em" colorScheme="green">
                En cours
              </Badge>
            </Box>
          </Box>
          <Link href="https://bloodshed.fr/" isExternal mx="10px">
            Bloodshed <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
        <Box
          marginTop="60px"
          maxW="xl"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="2xl"
          overflow="hidden"
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge ml="1" fontSize="0.8em" colorScheme="green">
                En cours
              </Badge>
            </Box>
          </Box>
          <Link href="https://bloodshed.fr/" isExternal mx="10px">
            Bloodshed <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      </Flex>
    </Container>
  );
}
