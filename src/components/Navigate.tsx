import { useState } from 'react';
import { BiCalendar, BiMenu, BiUser, BiYen } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import useStack from '@/hooks/useStack';

const NavigateContainer = styled.ul`
  position: fixed;
  width: 100vw;
  background: white;
  bottom: 0;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-top: 0.1px solid #eee;
  align-items: center;
  padding: 0px 2rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Li = styled.li<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'coral' : 'grey')};
`;

type CategoryType = 'list' | 'calender' | 'penalty' | 'user';

const CATEGORY_PATH_MAPS = {
  list: '/',
  calender: '/calender',
  penalty: '/penalty',
  user: '/user',
} as const;

const REVERT_CATEGORY_PATH_MAPS = {
  '/': 'list',
  '/calender': 'calender',
  '/penalty': 'penalty',
  '/user': 'user',
} as const;

const Navigate = () => {
  const { path, push } = useStack();
  const [category, setCategory] = useState<CategoryType>(
    REVERT_CATEGORY_PATH_MAPS[path as keyof typeof REVERT_CATEGORY_PATH_MAPS],
  );

  const handleNavigatePage = (selecterdCategory: CategoryType) => {
    setCategory(selecterdCategory);
    push(CATEGORY_PATH_MAPS[selecterdCategory]);
  };

  return (
    <>
      <Outlet />
      <NavigateContainer>
        <Li
          isSelected={category === 'list'}
          onClick={() => handleNavigatePage('list')}
        >
          <BiMenu />
        </Li>
        <Li
          isSelected={category === 'calender'}
          onClick={() => handleNavigatePage('calender')}
        >
          <BiCalendar />
        </Li>
        <Li
          isSelected={category === 'penalty'}
          onClick={() => handleNavigatePage('penalty')}
        >
          <BiYen />
        </Li>
        <Li
          isSelected={category === 'user'}
          onClick={() => handleNavigatePage('user')}
        >
          <BiUser />
        </Li>
      </NavigateContainer>
    </>
  );
};

export default Navigate;
