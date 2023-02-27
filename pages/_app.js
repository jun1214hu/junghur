import Contactbar from "../components/Contactbar";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
      <>
      <Contactbar />
      <Component {...pageProps} />
      </>
  );
}
