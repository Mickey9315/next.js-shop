import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Types
import type { AppProps } from "next/app";

// Import Tailwind CSS
import "../styles/tailwind.css";

// Meta
const meta = {
  title: "Next.js e-Shop",
  description:
    "Nintendo Switch e-Shop clone-ish website built with Next.js and Tailwind CSS.",
};

function EshopApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta name="theme-color" property="theme-color" content="#D5001C" />

        {/* Twitter */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        {/* Open-Graph */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
      </Head>

      <div className="container min-h-screen px-4 py-10 mx-auto space-y-10 text-white md:px-0 md:w-7/12">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default EshopApp;
