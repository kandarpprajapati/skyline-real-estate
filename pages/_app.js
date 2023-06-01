import "@/styles/globals.css";
import NavBar from "../components/NavBar2";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [user, setUser] = useState({value: null});
  const [key, setKey] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({value: token});
      setKey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser({value: null});
    setKey(Math.random());
  }

  return (
    <>
      {router.pathname !== "/auth/login"?<NavBar logout={logout} user={user} key={key} />:""}
      <Component {...pageProps} />
      {router.pathname !== "/auth/login"?<Footer />:""}
    </>
  );
}
