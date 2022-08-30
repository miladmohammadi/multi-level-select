import type { NextPage } from "next";
import Head from "next/head";
import { PageNotFound } from "pageComponents/errors";

const Error404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404</title>
        <meta name="description" content="Page not found 404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageNotFound />
    </div>
  );
};

export default Error404;
