import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HelloWorld } from "test2";

function MyApp({ Component, pageProps }: AppProps) {
  return <HelloWorld message="kk" />;
}

export default MyApp;
