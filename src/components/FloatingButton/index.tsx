import styled from 'styled-components';

import { IButton, IButtonStyle } from '../../types/Button';

export const FloatingButtonStyle = styled.button<IButtonStyle>`
  z-index: 100;
  font-size: 1rem;
  color: #222;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 1px solid #bbb;
  cursor: pointer;
  box-shadow: 1px 1px 3px 1px #00000029;
  background-color: ${({ primary }) => (primary ? 'coral' : '')};
`;

const FloatingButton = ({ content, onClick, primary }: IButton) => (
  <FloatingButtonStyle
    onClick={onClick}
    primary={primary}
  >
    {content}
  </FloatingButtonStyle>
);

export default FloatingButton;
