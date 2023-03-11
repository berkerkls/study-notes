import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
