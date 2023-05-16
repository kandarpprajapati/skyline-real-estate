import "@/styles/globals.css";
import NavBar from "../components/NavBar2";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      {router.pathname !== "/auth/login"?<NavBar />:""}
      <Component {...pageProps} />
      {router.pathname !== "/auth/login"?<Footer />:""}
    </>
  );
}
