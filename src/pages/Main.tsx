import { Link } from 'react-router-dom';

import Layout from '@/components/Layout';

const Main = () => (
  <Layout title='스터디 목록'>
    <div>
      <Link to='/create'>
        <button type='button'>스터디 생성</button>
      </Link>
    </div>
  </Layout>
);

export default Main;
