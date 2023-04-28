import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      {router.pathname !== "/auth/login"?<Navbar />:""}
      <Component {...pageProps} />
      {router.pathname !== "/auth/login"?<Footer />:""}
    </>
  );
}
