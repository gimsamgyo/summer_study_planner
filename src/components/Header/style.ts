import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 3rem;
  box-shadow: 0 0 2px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const ButtonLink = styled(Link)`
  position: absolute;
  left: 0;
`;
const GoBackButton = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;
export { NavContainer, ButtonLink, GoBackButton };
