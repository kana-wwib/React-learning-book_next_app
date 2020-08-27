import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () =>(
  <Layout header="Next" title="Top page.">
    <Counter />
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
    <Link href="./calc"><button>
      go to Calc &gt;&gt;
    </button></Link>
    <Link href="./fire"><button>
      go to Fire &gt;&gt;
    </button></Link>
    <Link href="./fire_find"><button>
      go to Firefind &gt;&gt;
    </button></Link>
    <Link href="./fire_add"><button>
      go to Fireadd &gt;&gt;
    </button></Link>
    <Link href="./fire_del"><button>
      go to Firedelete &gt;&gt;
    </button></Link>
  </Layout>
);
