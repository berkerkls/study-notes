import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoginProvider } from "@/context/login/LoginContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <div className="bg-slate-50 flex flex-col justify-between overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </LoginProvider>
  );
}
