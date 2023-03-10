import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza App</title>
        <meta name="description" content="Best pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={"/logo.png"} width={300} height={100} />
    </>
  );
}