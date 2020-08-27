import Link from 'next/link';
import Layout from '../components/Layout';
import Firefind from '../components/Firefind';

export default () => (
    <Layout header="Fire" title="Sample data.">
      <Firefind />
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </Layout>
);