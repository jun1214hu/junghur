import Layout, { siteTitle } from '../components/layout'
import '../styles/global.css'

// this will load on ALL pages
// layout, error boundary suspense, page
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
