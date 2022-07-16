import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import { PageContainer } from '@/CommonStyles';
// eslint-disable-next-line import/no-unresolved
import EnterStudyModalContent from '@/components/EnterStudyModalContent';
import FloatingButton from '@/components/FloatingButton';
import FloatingOpenMenuButton from '@/components/FloatingButton/FloatingOpenMenuButton';
import Layout from '@/components/Layout';
import PopupModal from '@/components/PopupModal';
import StudyListItem from '@/components/StudyListItem';
import useStack from '@/hooks/useStack';

const Contents = styled.div`
  padding: 0.5rem;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    width: 6px;
    background: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;

const FloatMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  position: fixed;
  bottom: 10rem;
  right: 2rem;
  width: 3.5rem;
  height: fit-content;
  color: #222;
  font-size: 1.6rem;
`;

const Main = () => {
  const { push } = useStack();
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
  const [enterModal, setEnterModal] = useState(false);

  const goCreatePage = () => push('/create');
  const toggleFloatingMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFloatingMenuOpen((prevState) => !prevState);
  };

  const closeFloatingMenu = () => setFloatingMenuOpen(false);
  const openEnterStudyModal = () => {
    setFloatingMenuOpen(false);
    setEnterModal(true);
  };
  const closeEnterStudyModal = () => setEnterModal(false);

  return (
    <>
      <Layout title='스터디 목록'>
        <PageContainer onClick={closeFloatingMenu}>
          <Contents>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((studyItem) => (
              <StudyListItem key={studyItem} />
            ))}
          </Contents>
          <FloatingOpenMenuButton
            content='M'
            primary
            onClick={toggleFloatingMenu}
          />
          {floatingMenuOpen && (
            <FloatMenus onClick={(e) => e.stopPropagation()}>
              <FloatingButton
                content='입장'
                onClick={openEnterStudyModal}
              />
              <FloatingButton
                content='생성'
                onClick={goCreatePage}
              />
            </FloatMenus>
          )}
        </PageContainer>
      </Layout>
      {enterModal && (
        <PopupModal>
          <EnterStudyModalContent onClose={closeEnterStudyModal} />
        </PopupModal>
      )}
    </>
  );
};

export default Main;
