import React from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "white",
          useSystemColorMode: true,
        }}
      ></ColorModeProvider>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
