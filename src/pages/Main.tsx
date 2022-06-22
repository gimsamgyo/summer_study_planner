import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PageContainer } from '@/CommonStyles';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Contents = styled.div``;

const Main = () => {
  const navigate = useNavigate();

  const goCreatePage = () => navigate('/create');

  return (
    <Layout title='스터디 목록'>
      <PageContainer>
        <Contents />
        <Button
          primary
          content='스터디 생성'
          onClick={goCreatePage}
        />
      </PageContainer>
    </Layout>
  );
};

export default Main;
