import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
}
