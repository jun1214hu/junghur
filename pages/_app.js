import Contactbar from "../components/Contactbar";
import Navbar from "../components/Navbar";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
      <>
      <Contactbar />
      <Navbar />
      <Component {...pageProps} />
      </>
  );
}
