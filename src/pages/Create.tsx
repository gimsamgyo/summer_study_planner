import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { ItemsCenter, SpaceBetween, FlexCol, PageContainer, Label } from '../CommonStyles';

import Button from '@/components/Button';
import CreateTimePlan from '@/components/CreateStudy/CreateTimePlan';
import DayButton from '@/components/Day/DayButton';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import TextArea from '@/components/TextArea';

interface ICreateForm {
  studyName: string;
  studyGoal: string;
}

type PlannedDayType = {
  day: string;
  time: { startTime: string; endTime: string };
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Create = () => {
  const [plannedDays, setPlannedDays] = useState<PlannedDayType[]>([] as PlannedDayType[]);
  const [isDayClicked, setIsDayClicked] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateForm>();

  const onSaveTime = (day: string, time: { startTime: string; endTime: string }) => {
    setPlannedDays((currentPlannedDays) => {
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
    setPlannedDays((currentPlannedDays) => {
      const newPlannedDays = currentPlannedDays.splice(idx, 1);
      return newPlannedDays;
    });
  };

  const onSubmitValid = (data: ICreateForm) => {
    if (plannedDays.length === 0) {
      alert('지정된 일정이 없습니다.');
      return;
    }
    console.log('valid', data);
  };
  const onSubmitInvalid = (formErrors: FieldErrors) => {
    console.log(formErrors);
  };

  return (
    <Layout
      title='스터디 생성'
      canGoBack
    >
      <PageContainer>
        <Form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            type='text'
            placeholder='스터디이름을 입력하세요'
            register={register('studyName', {
              required: '스터디 이름이 필요합니다.',
              minLength: {
                value: 3,
                message: '이름은 3글자 이상 입력해주세요.',
              },
            })}
            required
            name='study-name'
            label='스터디 이름'
            errorMessage={errors.studyName?.message}
          />
          <TextArea
            required
            rows={4}
            placeholder='스터디목표를 입력하세요'
            register={register('studyGoal', {
              required: '스터디 목표가 필요합니다.',
              minLength: {
                value: 3,
                message: '목표는 5글자 이상 입력해주세요.',
              },
            })}
            name='study-goal'
            label='스터디 목표'
            errorMessage={errors.studyGoal?.message}
          />
          <FlexCol>
            <Label>스터디 일정</Label>
            <SpaceBetween>
              {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                <DayButton
                  key={day}
                  content={day}
                  isFilled={
                    day === isDayClicked ||
                    plannedDays.filter((plannedDay) => plannedDay.day === day).length > 0
                  }
                  setDayChecked={() => {
                    setIsDayClicked((prev) => {
                      if (prev === day) return '';
                      return day;
                    });
                  }}
                />
              ))}
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
            <Label>저장된 일정</Label>
            {plannedDays.length > 0 &&
              plannedDays.map((plan, idx) => (
                <ItemsCenter key={plan.day}>
                  <p>{`${plan.day} ${plan.time.startTime} ~ ${plan.time.endTime}`}</p>
                  <Button
                    primary
                    content='삭제'
                    onClick={() => onClickClearPlannedDay(idx)}
                  />
                </ItemsCenter>
              ))}
          </FlexCol>
        </Form>
        <Button
          primary
          content='저장'
          onClick={handleSubmit(onSubmitValid, onSubmitInvalid)}
        />
      </PageContainer>
    </Layout>
  );
};

export default Create;
