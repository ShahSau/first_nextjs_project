import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewpoint" content="what to write"></meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
