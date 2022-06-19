import { useState } from 'react';
import styled from 'styled-components';

import { FlexCol, Flex, ItemsCenter } from '@/CommonStyles';

const StudyTimeContainer = styled(FlexCol)`
  gap: 0.5rem;
  width: 100%;
  border: 1px solid coral;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  h4 > span {
    color: coral;
  }
`;
const SaveButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  button {
    border: 1px solid gray;
    border-radius: 0.5rem;
    cursor: pointer;
    background: white;
    padding: 0.2rem 1rem;
  }
  button:nth-of-type(2) {
    border-color: coral;
    color: white;
    background: coral;
  }
`;
const Label = styled.p`
  min-width: 6rem;
`;

type PlanTimeType = {
  startTime: string;
  endTime: string;
};
interface ICreateTimePlan {
  day: string;
  // day,time에 대해서 no-unused-vars error가 발생함
  /* eslint-disable-next-line */
  onSave: (day: string, time: PlanTimeType) => void;
  onCancel: () => void;
}

const CreateTimePlan = ({ day, onSave, onCancel }: ICreateTimePlan) => {
  const [time, setTime] = useState<PlanTimeType>({
    startTime: '',
    endTime: '',
  });

  const onClickCancel = () => {
    onCancel();
  };
  const onClickSave = () => {
    onSave(day, time);
  };
  return (
    <StudyTimeContainer>
      <h4>
        <span>{`${day}요일`}</span>
        시간 선택
      </h4>
      <FlexCol>
        <ItemsCenter>
          <Label>시작 시간</Label>
          <input
            type='time'
            min='00:00'
            max='24:00'
            required
            value={time.startTime}
            onChange={(e) => {
              setTime((prev) => ({ ...prev, startTime: e.target.value }));
            }}
          />
        </ItemsCenter>
        <ItemsCenter>
          <Label>끝나는 시간</Label>
          <input
            type='time'
            onChange={(e) => {
              setTime((prev) => ({ ...prev, endTime: e.target.value }));
            }}
            value={time.endTime}
            min='00:00'
            max='24:00'
            required
          />
        </ItemsCenter>
      </FlexCol>
      <SaveButtonContainer>
        <button
          type='button'
          onClick={onClickCancel}
        >
          취소
        </button>
        <button
          type='button'
          onClick={onClickSave}
        >
          확인
        </button>
      </SaveButtonContainer>
    </StudyTimeContainer>
  );
};
export default CreateTimePlan;
