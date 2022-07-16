import { useForm } from 'react-hook-form';
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
    text-align: left;
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

interface EnterStudyCodeType {
  enterCode: string;
}
export default function EnterStudyModalContent({ onClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterStudyCodeType>();
  const submitCode = (data: EnterStudyCodeType) => {
    console.log('submit code', data.enterCode);
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
        register={register('enterCode', {
          required: '입장 코드를 입력해주세요',
          maxLength: {
            value: 6,
            message: '입장 코드는 6글자입니다.',
          },
          minLength: {
            value: 6,
            message: '입장 코드는 6글자입니다.',
          },
        })}
        maxLength={6}
        errorMessage={errors?.enterCode?.message}
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
          onClick={handleSubmit(submitCode)}
        >
          입장
        </EnterButton>
      </ButtonWrapper>
    </Container>
  );
}
