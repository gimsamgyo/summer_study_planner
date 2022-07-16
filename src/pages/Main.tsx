import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import { PageContainer } from '@/CommonStyles';
// eslint-disable-next-line import/no-unresolved
import FloatingButton from '@/components/FloatingButton';
import FloatingOpenMenuButton from '@/components/FloatingButton/FloatingOpenMenuButton';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import StudyListItem from '@/components/StudyListItem';
import useSearch from '@/hooks/useSearch';
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
  const { keyword, setKeyword, searchResults } = useSearch();
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);

  const goCreatePage = () => push('/create');
  const toggleFloatingMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFloatingMenuOpen((prevState) => !prevState);
  };

  const closeFloatingMenu = () => setFloatingMenuOpen(false);

  return (
    <Layout title='스터디 목록'>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <PageContainer onClick={closeFloatingMenu}>
        <Contents>
          {searchResults.map((studyItem) => (
            <StudyListItem {...studyItem} />
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
