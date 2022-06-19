import { useState } from 'react';
import styled from 'styled-components';

import {
  ItemsCenter,
  SpaceBetween,
  Flex,
  FlexCol,
  PageContainer,
  PageMenuTitle,
} from '../CommonStyles';

import CreateTimePlan from '@/components/CreateStudy/CreateTimePlan';
import DayButton from '@/components/Day/DayButton';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import TextArea from '@/components/TextArea';

const InputWrapper = styled(ItemsCenter)`
  max-width: 500px;
  width: 100%;
`;

type PlannedDayType = {
  day: string;
  time: { startTime: string; endTime: string };
};
const Create = () => {
  const [plannedDays, setPlannedDay] = useState<PlannedDayType[]>([] as PlannedDayType[]);
  const [isDayClicked, setIsDayClicked] = useState('');

  const onSaveTime = (day: string, time: { startTime: string; endTime: string }) => {
    setPlannedDay((currentPlannedDays) => {
      const currentDayIndex = currentPlannedDays.findIndex(
        (plannedDay) => plannedDay.day === isDayClicked,
      );
      if (currentDayIndex === -1) {
        const newPlannedDay = {
          day,
          time,
        };

        return [...currentPlannedDays, newPlannedDay];
      }
      const newPlannedDay = { ...currentPlannedDays[currentDayIndex] } as PlannedDayType;
      newPlannedDay.time = time;

      const newPlannedDays = currentPlannedDays.splice(0);
      newPlannedDays[currentDayIndex] = newPlannedDay;

      return newPlannedDays;
    });
    setIsDayClicked('');
  };
  const onCancelTime = () => {
    setIsDayClicked('');
  };
  const onClickClearPlannedDay = (idx: number) => {
    setPlannedDay((currentPlannedDays) => {
      const newPlannedDays = currentPlannedDays.splice(idx, 1);
      return newPlannedDays;
    });
  };

  return (
    <Layout
      title='스터디 생성'
      canGoBack
    >
      <PageContainer>
        <FlexCol>
          <ItemsCenter>
            <PageMenuTitle>스터디 이름</PageMenuTitle>
            <InputWrapper>
              <Input
                type='text'
                placeholder='스터디이름을 입력하세요'
              />
            </InputWrapper>
          </ItemsCenter>
          <Flex>
            <PageMenuTitle>스터디 목적</PageMenuTitle>
            <InputWrapper>
              <TextArea
                placeholder='스터디이름을 입력하세요'
                cols={30}
                rows={5}
              />
            </InputWrapper>
          </Flex>
          <FlexCol>
            <PageMenuTitle>스터디 일정</PageMenuTitle>
            <SpaceBetween>
              {/* <JustifyCenter> */}
              {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                <DayButton
                  key={day}
                  content={day}
                  isFilled={
                    day === isDayClicked ||
                    plannedDays.filter((plannedDay) => plannedDay.day === day).length > 0
                  }
                  onClick={() => {
                    setIsDayClicked((prev) => {
                      if (prev === day) return '';
                      return day;
                    });
                  }}
                />
              ))}
              {/* </JustifyCenter> */}
            </SpaceBetween>
          </FlexCol>
          {isDayClicked && (
            <CreateTimePlan
              day={isDayClicked}
              onSave={onSaveTime}
              onCancel={onCancelTime}
            />
          )}
          <FlexCol>
            <PageMenuTitle>저장된 일정</PageMenuTitle>
            {plannedDays.length > 0 &&
              plannedDays.map((plan, idx) => (
                <ItemsCenter key={plan.day}>
                  <p>{`${plan.day} ${plan.time.startTime} ~ ${plan.time.endTime}`}</p>
                  <button
                    type='button'
                    onClick={() => onClickClearPlannedDay(idx)}
                  >
                    clear
                  </button>
                </ItemsCenter>
              ))}
          </FlexCol>
        </FlexCol>
      </PageContainer>
    </Layout>
  );
};

export default Create;
