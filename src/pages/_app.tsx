import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import Head from "next/head";
import "@/styles/globals.scss";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Head>
        <title>QueryFlexDB</title>
        <meta
          name="description"
          content="QueryFlex is an
      all-in-one Database Query Generator designed for developers working
      with various database systems!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.isVerified === "true" ? <></> : <Navbar />}

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
