import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
