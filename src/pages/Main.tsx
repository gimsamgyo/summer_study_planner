import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PageContainer } from '@/CommonStyles';
// eslint-disable-next-line import/no-unresolved
import FloatingButton from '@/components/FloatingButton';
import FloatingOpenMenuButton from '@/components/FloatingButton/FloatingOpenMenuButton';
import Layout from '@/components/Layout';

const Contents = styled.div``;

const FloatMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  position: absolute;
  bottom: 10rem;
  right: 2rem;
  width: 3.5rem;
  height: fit-content;
  color: #222;
  font-size: 1.6rem;
`;

const Main = () => {
  const navigate = useNavigate();
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);

  const goCreatePage = () => navigate('/create');
  const openFloatingMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFloatingMenuOpen(true);
  };
  const closeFloatingMenu = () => setFloatingMenuOpen(false);

  return (
    <Layout title='스터디 목록'>
      <PageContainer onClick={closeFloatingMenu}>
        <Contents />
        <FloatingOpenMenuButton
          content='M'
          primary
          onClick={openFloatingMenu}
        />
        {floatingMenuOpen && (
          <FloatMenus onClick={(e) => e.stopPropagation()}>
            <FloatingButton
              content='입장'
              onClick={(e: SyntheticEvent<HTMLButtonElement>) => e.stopPropagation()}
            />
            <FloatingButton
              content='생성'
              onClick={goCreatePage}
            />
          </FloatMenus>
        )}
      </PageContainer>
    </Layout>
  );
};

export default Main;
