import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

type Data = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const StaticGenerationId: NextPage<{ data: Data }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Static Generation</title>
        <meta name="description" content="Static Generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <FormattedMessage id="greeting" />
        </div>
        <div>{data.title}</div>
        <div>
          <Link href="/">Move Home</Link>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: '1',
        },
        // https://nextjs.org/docs/advanced-features/i18n-routing#dynamic-routes-and-getstaticprops-pages
        locale: 'ko',
      },
      {
        params: {
          id: '1',
        },
        locale: 'en',
      },
      {
        params: {
          id: '2',
        },
        locale: 'ko',
      },
      {
        params: {
          id: '2',
        },
        locale: 'en',
      },
      {
        params: {
          id: '3',
        },
        locale: 'ko',
      },
      {
        params: {
          id: '3',
        },
        locale: 'en',
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params?.id;
  if (!id) {
    id = '1'; // default
  }

  const response = await fetch(`https://koreanjson.com/posts/${id}`);
  const json = await response.json();
  const data: Data = json;

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default StaticGenerationId;
