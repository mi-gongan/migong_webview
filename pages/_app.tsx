import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../src/layouts/AppBar";
import BottomBar from "../src/layouts/BottomBar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <Component {...pageProps} />
      <BottomBar />
    </RecoilRoot>
  );
}
