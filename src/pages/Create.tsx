import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { ItemsCenter, FlexCol, PageContainer, Label } from '../CommonStyles';

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
type StudyWeekType = 'weekly' | 'biweekly';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
const SubmitButtonWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  button {
    width: 100%;
    height: 2rem;
  }
`;
const Create = () => {
  const [plannedDays, setPlannedDays] = useState<PlannedDayType[]>([] as PlannedDayType[]);
  const [startDayOfStudy, setStartDayOfStudy] = useState<Dayjs>(dayjs(new Date()));
  const [studyFrequency, setStudyFrequency] = useState<StudyWeekType>('weekly');
  const [isDayClicked, setIsDayClicked] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateForm>({
    mode: 'onSubmit',
  });

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
      alert('????????? ????????? ????????????.');
      return;
    }
    console.log('valid', data);
  };

  const isPreviousDay = (date: Dayjs) => dayjs(new Date()).isAfter(date);

  const changeStartDayOfStudy = (date: string) => {
    const selectedDate = dayjs(new Date(date));

    if (isPreviousDay(selectedDate)) {
      alert('???????????? ?????? ????????? ???????????? ??? ????????????.');
      return;
    }

    setStartDayOfStudy(dayjs(new Date(date)));
  };

  const selectFrequencyOfMonth = (selectedFrequency: StudyWeekType) => {
    setStudyFrequency(selectedFrequency);
  };

  return (
    <Layout
      title='????????? ??????'
      canGoBack
    >
      <PageContainer>
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            type='text'
            placeholder='?????????????????? ???????????????'
            register={register('studyName', {
              required: '????????? ????????? ???????????????.',
              minLength: {
                value: 3,
                message: '????????? 3?????? ?????? ??????????????????.',
              },
            })}
            name='study-name'
            label='????????? ??????'
            errorMessage={errors.studyName?.message}
          />
          <TextArea
            rows={4}
            placeholder='?????????????????? ???????????????'
            register={register('studyGoal', {
              required: '????????? ????????? ???????????????.',
              minLength: {
                value: 3,
                message: '????????? 5?????? ?????? ??????????????????.',
              },
            })}
            name='study-goal'
            label='????????? ??????'
            errorMessage={errors.studyGoal?.message}
          />
          <FlexCol>
            <Label>????????? ??????</Label>
            <ItemsCenter>
              <span>????????? ?????????</span>
              <input
                type='date'
                value={startDayOfStudy.format('YYYY-MM-DD')}
                onChange={(e) => changeStartDayOfStudy(e.target.value)}
              />
            </ItemsCenter>
            <ItemsCenter>
              <Button
                content='??????'
                onClick={() => selectFrequencyOfMonth('weekly')}
                primary={studyFrequency === 'weekly'}
              />
              <Button
                content='??????'
                onClick={() => selectFrequencyOfMonth('biweekly')}
                primary={studyFrequency === 'biweekly'}
              />
            </ItemsCenter>
            <ItemsCenter>
              {['???', '???', '???', '???', '???', '???', '???'].map((day) => (
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
            </ItemsCenter>
          </FlexCol>
          {isDayClicked && (
            <CreateTimePlan
              day={isDayClicked}
              onSave={onSaveTime}
              onCancel={onCancelTime}
            />
          )}
          <FlexCol>
            <Label>????????? ??????</Label>
            {plannedDays.length > 0 &&
              plannedDays.map((plan, idx) => (
                <ItemsCenter key={plan.day}>
                  <p>{`${plan.day} ${plan.time.startTime} ~ ${plan.time.endTime}`}</p>
                  <Button
                    primary
                    content='??????'
                    onClick={() => onClickClearPlannedDay(idx)}
                  />
                </ItemsCenter>
              ))}
          </FlexCol>
        </Form>
        <SubmitButtonWrapper>
          <Button
            primary
            content='??????'
            onClick={handleSubmit(onSubmitValid)}
          />
        </SubmitButtonWrapper>
      </PageContainer>
    </Layout>
  );
};

export default Create;
