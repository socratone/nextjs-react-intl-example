import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
        <div>
          <Link href="/static-generation/1">Move Static Generation 1</Link>
        </div>
        <div>
          <Link href="/static-generation/2">Move Static Generation 2</Link>
        </div>
        <div>
          <Link href="/static-generation/3">Move Static Generation 3</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
