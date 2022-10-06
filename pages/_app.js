import "../styles/globals.css";
import Wrapper from "../components/Wrapper";
import { AnimatePresence } from "framer-motion";

import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Wrapper location={router} key={router.pathname}>
        <Component {...pageProps} location={router} key={router.pathname} />
      </Wrapper>
    </AnimatePresence>
  );
}

export default MyApp;
