import { ReactNode } from 'react';
import styled from 'styled-components';

import Portal from '@/portal';

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

interface PopupModalProps {
  children: ReactNode;
}
export default function PopupModal({ children }: PopupModalProps) {
  return (
    <Portal>
      <Background />
      <Content>{children}</Content>
    </Portal>
  );
}
