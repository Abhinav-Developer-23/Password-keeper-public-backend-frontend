import "@/styles/globals.css";
import "@/styles/carausel.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerlayout from '@/components/layout/header';
//   <Headerlayout>
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   
        <Component {...pageProps} />
      
    </>
  );
}
