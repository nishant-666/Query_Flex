import Head from "next/head";
import { api } from "@/utils/api";
import HomePage from "@/pages/home";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Query Flex</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={``}>
        <HomePage />
      </main>
    </>
  );
}
