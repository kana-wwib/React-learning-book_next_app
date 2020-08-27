import Link from 'next/link';
import Layout from '../components/Layout';
import Fireadd from '../components/Fireadd';

export default () => (
  <Layout header="Fire" title="add data.">
    <Fireadd />
    <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
  </Layout>
);