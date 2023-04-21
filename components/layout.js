import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Contactbar from "./Contactbar";
import Navbar from "./Navbar";

const name = "Jung Hur";
export const siteTitle = "Jung Hur personal website";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jung Hur</title>
        <meta
          name="description"
          content="Jung Hur personal site created with nextjs, and react"
        />
      </Head>      
          <Contactbar />
          <main>
            <section> {children} </section>
            <Navbar />
          </main>
          <footer />
    </div>
  );
}
