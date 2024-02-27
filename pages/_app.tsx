import "@/styles/globals.css";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
       <Component {...pageProps} />
    </UserProvider>
    
    );
}
