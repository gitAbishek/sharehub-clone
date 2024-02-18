import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ContextProvider from "@/context/context";
import MainLayout from "@/layout/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  let LayoutContainer = MainLayout;

  return (
    <ContextProvider>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </ContextProvider>
  );
}
