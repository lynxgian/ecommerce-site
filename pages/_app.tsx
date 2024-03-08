import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavBar from "@/components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  
  return (
    <UserProvider>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />

      </ChakraProvider>
    </UserProvider>
    
    );
}
