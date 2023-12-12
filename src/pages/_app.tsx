import MainLayout from "@/layouts/MainLayout/MainLayout";
import "@/styles/global.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
