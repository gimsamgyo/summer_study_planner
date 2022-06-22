import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout';
import Button from '@/components/Button';
import styled from 'styled-components';
import { PageContainer } from '@/CommonStyles';

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
