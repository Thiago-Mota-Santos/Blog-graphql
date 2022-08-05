import React from "react";
import { Provider } from "urql";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { client, ssrCache } from "../lib/urql";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <div>
      <Provider value={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
