import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import English from '../content/locales/en';
import Korean from '../content/locales/ko';
import { IntlProvider } from 'react-intl';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['ko'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'ko':
        return Korean;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
