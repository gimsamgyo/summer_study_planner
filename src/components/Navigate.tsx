import { useState } from 'react';
import { BiMenu, BiMessageRounded, BiUser, BiYen } from 'react-icons/bi';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavigateContainer = styled.ul`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-top: 0.1px solid grey;
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

type CategoryType = 'list' | 'message' | 'penalty' | 'user';

const CATEGORY_PATH_MAPS = {
  list: '/',
  message: '/message',
  penalty: '/penalty',
  user: '/user',
} as const;

const Navigate = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryType>('list');

  const handleNavigatePage = (selecterdCategory: CategoryType) => {
    setCategory(selecterdCategory);
    navigate(CATEGORY_PATH_MAPS[selecterdCategory]);
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
          isSelected={category === 'message'}
          onClick={() => handleNavigatePage('message')}
        >
          <BiMessageRounded />
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
