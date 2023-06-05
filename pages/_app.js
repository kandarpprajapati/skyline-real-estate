import "@/styles/globals.css";
import NavBar from "../components/NavBar2";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    router.events.on("routeChangeStart", () => {
      setProgress(40);
    }); 
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };

  return (
    <>
      <LoadingBar
        color="#e53e3e"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      {router.pathname !== "/auth/login" ? (
        <NavBar logout={logout} user={user} key={key} />
      ) : (
        ""
      )}
      <Component {...pageProps} />
      {router.pathname !== "/auth/login" ? <Footer /> : ""}
    </>
  );
}
