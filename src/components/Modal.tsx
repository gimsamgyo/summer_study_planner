import styled from 'styled-components';

import Portal from '@/portal';

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const Modal = ({ children }: { children: any }) => (
  <Portal>
    <Content>{children}</Content>
  </Portal>
);

export default Modal;
