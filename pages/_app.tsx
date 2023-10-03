import React from 'react';
import { AppProps } from 'next/app';
import { FormDataProvider } from '../context/FormDataContext';
import { StateSelectProvider } from '@/context/StateSelectContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateSelectProvider>
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
    </StateSelectProvider>
  );
}

export default MyApp;