import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SSRProvider } from "@salutejs/plasma-web";
import { GlobalStyle } from "./GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
