// global css import
import '@fontsource/chakra-petch';
import '@styles/globals.css';
import '@styles/starry.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { ChakraProvider } from '@chakra-ui/react';
import EventClosedModal from '@components/Modal/EventClosedModal';
import { GlobalProvider } from '@context/GlobalContext';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../theme';

gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DigiAsia 2022 數位亞洲大會</title>
      </Head>
      <ChakraProvider theme={theme}>
        <GlobalProvider>
          <Component {...pageProps} />
          <EventClosedModal />
        </GlobalProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
