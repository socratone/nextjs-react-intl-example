import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS React Intl Example</title>
        <meta name="description" content="NextJS React Intl Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <FormattedMessage id="greeting" />
        </div>
      </main>
    </>
  );
};

export default Home;
