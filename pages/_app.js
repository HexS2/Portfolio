import React from 'react'
import { ChakraProvider, ColorModeProvider,UseColorMode } from "@chakra-ui/react"
import  customTheme from '../styles/theme'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider options={{
        initialColorMode:"dark",
        useSystemColorMode:true,
      }}>
      </ColorModeProvider>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
