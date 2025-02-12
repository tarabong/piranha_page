import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/common/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ピラニア・パワー・プロジェクト.com</title>
        <meta name="description" content="ピラニア・パワー・プロジェクト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}></ThemeProvider>
      <Component {...pageProps} />
    </>
  );
}
