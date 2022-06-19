import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { NavContainer, ButtonLink, GoBackButton } from './style';

const Header = () => {
  const location = useLocation();
  const currentTitle = useMemo(() => {
    let title = 'Not Found';
    switch (location.pathname) {
      case '/':
        title = '스터디 목록';
        break;
      case '/create':
        title = '스터디 생성';
        break;
      default:
        break;
    }
    return title;
  }, [location.pathname]);

  return (
    <NavContainer>
      {location.pathname !== '/' && (
        <ButtonLink to='/'>
          <GoBackButton>&larr;</GoBackButton>
        </ButtonLink>
      )}
      <h2>{currentTitle}</h2>
    </NavContainer>
  );
};
export default Header;
