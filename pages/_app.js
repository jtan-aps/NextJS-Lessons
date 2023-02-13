import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
