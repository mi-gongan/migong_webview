import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../src/components/layouts/AppBar";
import BottomBar from "../src/components/layouts/BottomBar";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

declare global {
  interface Window {
    webviewChannel: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <Component {...pageProps} />
      <BottomBar />
    </RecoilRoot>
  );
}
