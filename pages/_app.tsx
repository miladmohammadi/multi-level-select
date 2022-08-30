import "../styles/globals.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Protecting Routes

function Main({ Component, pageProps, router }: any) {
  const [showChild, setShowChild] = useState(false);
  const { pathname } = useRouter();

  // setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    //@ts-ignore
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // ======= Wait until after client-side hydration to show child
  // https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }
  // =======

  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps, router }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jacob's Assessment</title>
      </Head>
      {/** in Main Component we can call Hooks to use any hooks here */}
      <Main Component={Component} pageProps={pageProps} router={router} />
    </>
  );
}

export default MyApp;
