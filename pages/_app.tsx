import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../src/layouts/AppBar";
import BottomBar from "../src/layouts/BottomBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
