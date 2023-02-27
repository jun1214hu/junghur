import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Jung Hur</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, World!
        </p>
      </section>
    </Layout>
  )
}
