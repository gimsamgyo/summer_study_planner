import { ReactNode } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  // hasTabBar?: boolean; // 추후 하단 바 필요시 추가
  children: ReactNode;
}

const Children = styled.div`
  padding-top: 3rem;
  width: 100vw;
  height: 94vh;
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
  border-bottom: 1px solid #bbb;
  padding: 0 1rem;
`;
const Layout = ({ title, canGoBack, children }: LayoutProps) => {
  const navigate = useNavigate();
  const onClickGoBack = () => {
    navigate(-1);
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
      {/* 필요 시 bottomNav 추가 가능 */}
    </>
  );
};
export default Layout;
