import { AppProps } from "next/app";
import "../styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";
const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          body {
            font-family: ${font.style.fontFamily}, sans-serif;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
