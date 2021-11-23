import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { DownloadIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import VoxelLoader from "./voxel-loader";
import dynamic from "next/dynamic";
const LazyVoxel = dynamic(() => import("./voxel-loader"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});
const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#1A202C",
  };

  const color = {
    light: "1A202C",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="container.2xl"
        minWidth="100%"
        boxShadow="lg"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={0}
        mb={[0, 0, 0]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/work" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]}>
              My Work
            </Button>
          </NextLink>
          <NextLink href="/download" passHref>
            <Button
              as="a"
              leftIcon={<DownloadIcon />}
              variant="ghost"
              p={[1, 2, 4]}
            >
              Downloads
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        maxWidth="container.2xl"
        minWidth="100%"
        minHeight="100%"
        mx="auto"
      >
        <LazyVoxel />
        {children}
      </Flex>
      <Footer />
      <style></style>
    </>
  );
};

export default Container;
