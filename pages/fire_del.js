import Link from 'next/link';
import Layout from '../components/Layout';
import Firedelete from '../components/Firedelete';

export default () => (
  <Layout header="Fire" title="delete data.">
    <Firedelete />
    <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
  </Layout>
);