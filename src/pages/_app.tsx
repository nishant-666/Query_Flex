import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import Head from "next/head";
import Image from "next/image";
import "@/styles/globals.scss";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
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
      <div className="producthunt">
        <a
          href="https://www.producthunt.com/posts/queryflex?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-queryflex"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=411415&theme=dark"
            alt="QueryFlex - All&#0045;in&#0045;one&#0032;Database&#0032;Query&#0032;Generator&#0032;designed&#0032;for&#0032;developers&#0046; | Product Hunt"
            width="250"
            height="54"
          />
        </a>
      </div>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
