import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Avatar, WrapItem } from "@chakra-ui/react";
import Container from "../components/Container";
import { Icon } from "@chakra-ui/react";
import { GoOctoface } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import VoxelLoader from "../components/voxel-loader";
import dynamic from "next/dynamic";
const LazyVoxel = dynamic(() => import("../components/voxel-loader"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});
export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Container>
      <Head>
        <title>Home - h3x</title>
      </Head>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <LazyVoxel />
        <WrapItem>
          <Avatar
            name="Segun Adebayo"
            size="2xl"
            src="https://avatars.githubusercontent.com/u/18382518?s=400&u=8f2cc93898a29da6c3c4cedfb36be2e90f14d608&v=4"
          />
        </WrapItem>
        <Heading mb={2}>👋 Hi there !</Heading>
        <Text textAlign="center" color={colorSecondary[colorMode]}>
          I make stuff with code.
        </Text>
        <Text textAlign="center" color={colorSecondary[colorMode]}>
          I am a French developer. My name is Guillaume AKA h3x and im 22 years
          old.
        </Text>
        <HStack padding="50px" maxW="100%">
          <Button colorScheme="white" variant="outline">
            <Link href="https://github.com/HexS2" isExternal>
              <Icon
                as={GoOctoface}
                w={5}
                h={5}
                m={1}
                color={colorSecondary[colorMode]}
              />{" "}
              GitHub
            </Link>
          </Button>
          <Button colorScheme="white" variant="outline">
            <Link href="https://twitter.com/CTRLfr" isExternal>
              <Icon
                as={FaTwitter}
                w={5}
                h={5}
                m={1}
                color={colorSecondary[colorMode]}
              />{" "}
              Twitter
            </Link>
          </Button>
          <Button colorScheme="white" variant="outline">
            <Link href="https://www.linkedin.com/" isExternal>
              <Icon
                as={FaLinkedin}
                w={5}
                h={5}
                m={1}
                color={colorSecondary[colorMode]}
              />{" "}
              Linkedin
            </Link>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
