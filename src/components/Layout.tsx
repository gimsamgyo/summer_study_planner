import { ReactNode } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import styled from 'styled-components';

import Navigate from './Navigate';

import useStack from '@/hooks/useStack';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  nav?: boolean;
  // hasTabBar?: boolean; // 추후 하단 바 필요시 추가
  children: ReactNode;
}

const Children = styled.div`
  padding: 3rem 0;
  width: 100vw;
  height: 100vh;
`;
const BackButtonWrapper = styled.button`
  position: absolute;
  left: 1rem;
  background: white;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #eee;
  padding: 0 1rem;
`;
const Layout = ({ title, canGoBack, nav, children }: LayoutProps) => {
  const { pop } = useStack();
  const onClickGoBack = () => {
    pop();
  };
  return (
    <>
      <Header>
        {canGoBack && (
          <BackButtonWrapper onClick={onClickGoBack}>
            <BiChevronLeft />
          </BackButtonWrapper>
        )}
        {title && <span>{title}</span>}
      </Header>
      <Children>{children}</Children>
      {!nav && <Navigate />}
      {/* 필요 시 bottomNav 추가 가능 */}
    </>
  );
};
export default Layout;
