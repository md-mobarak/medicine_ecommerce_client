import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page | Your Website</title>
      <meta name="description" content="This is the home page of your website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="p-8">
      <h1 className="text-3xl font-bold text-light">Welcome to Your Website</h1>
      <p className="mt-4 text-lg text-primary">This is the homepage of your Next.js website.</p>
      
    </main>
  </>
  );
}
