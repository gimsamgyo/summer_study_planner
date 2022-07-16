import styled from 'styled-components';

import Input from './Input';

const Container = styled.div`
  width: 21rem;
  height: 10rem;
  padding: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > div:nth-of-type(2) {
    width: 90%;
  }
`;
const TitleWrapper = styled.div`
  padding-top: 1rem;
  text-align: center;
`;
const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
`;
const CloseButton = styled(Button)`
  background: #eee;
  color: #222;
`;
const EnterButton = styled(Button)`
  background: coral;
  color: white;
`;

interface ModalProps {
  onClose: () => void;
}
export default function EnterStudyModalContent({ onClose }: ModalProps) {
  const submitCode = () => {
    console.log('submit code');
  };
  return (
    <Container>
      <TitleWrapper>
        <Title>스터디 입장 코드</Title>
      </TitleWrapper>
      <Input
        placeholder='입장 코드를 입력하세요'
        type='text'
        name='enter-code'
        required
      />
      <ButtonWrapper>
        <CloseButton
          type='button'
          onClick={onClose}
        >
          닫기
        </CloseButton>
        <EnterButton
          type='button'
          onClick={submitCode}
        >
          입장
        </EnterButton>
      </ButtonWrapper>
    </Container>
  );
}
