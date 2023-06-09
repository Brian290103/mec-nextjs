import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maasai Education Center - the Style Hotel Schoo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300,400&display=swap"
          rel="stylesheet"
        />{' '} */}
      </Head>
      {/* Main Sections */}

      <Layout isAdmin={true}>
        <Component {...pageProps} />
      </Layout>
      {/* Main Sections */}
    </>
  );
}
