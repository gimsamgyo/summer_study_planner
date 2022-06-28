import styled from 'styled-components';

import { IButton } from '../../types/Button';

import { FloatingButtonStyle } from './index';

const FloatingOpenMenuButtonStyle = styled(FloatingButtonStyle)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  color: whitesmoke;
`;

const FloatingOpenMenuButton = ({ content, onClick, primary }: IButton) => (
  <FloatingOpenMenuButtonStyle
    onClick={onClick}
    primary={primary}
  >
    {content}
  </FloatingOpenMenuButtonStyle>
);
export default FloatingOpenMenuButton;
