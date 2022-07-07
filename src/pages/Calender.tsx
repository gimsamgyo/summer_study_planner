/* eslint-disable */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CalendarScreen from 'react-calendar';
import styled from 'styled-components';

import 'react-calendar/dist/Calendar.css';
import { studyApi } from '@/app/api/study';
import Layout from '@/components/Layout';

const CalenderWrapper = styled.div`
  height: 100%;
  .react-calendar {
    width: 100vw;
    max-width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation button {
    color: coral;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    div {
      margin: 0.1rem;
    }
    abbr {
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100vw;
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: none;
    abbr {
      background: none;
      color: coral;
    }
  }
  .react-calendar__tile--now {
    background: none;
    abbr {
      background: #fff6f2;
      font-weight: bold;
      color: coral;
    }
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: none;
    border-radius: 6px;
    font-weight: bold;
    color: coral;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    abbr {
      background: coral;
      font-weight: bold;
      color: white;
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    abbr {
      background: coral;
      color: white;
    }
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    /* background: #f8f8fa; */
    color: coral;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    background: none;
    abbr {
      background: coral;
      color: white;
    }
  }
  .react-calendar__tile--rangeEnd {
    /* border-top-left-radius: 0;
    border-bottom-left-radius: 0; */
    background: none;
    abbr {
      background: coral;
      color: white;
    }
  }
  .dot {
    height: 8px;
    width: 8px;
    background-color: #f87171;
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }
`;

const CalenderDetailContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px #00000029;
  overflow: auto;
  scroll-snap-type: y mandatory;
  padding: 0px 1rem;
`;

const CalenderContentContainer = styled.div`
  font-weight: 400;
  padding: 0.6rem 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    p {
      font-size: small;
    }
  }
`;

const CalenderContentTitle = styled.h2``;

type CalenderContentType = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

const CalenderContent = ({ data }: { data: CalenderContentType[] }) => {
  const navigate = useNavigate();
  const getTimeFormat = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;
  return (
    <CalenderDetailContainer>
      {data.map(({ title, startTime, endTime, description }) => (
        <CalenderContentContainer
          onClick={() => {
            navigate('/calender/' + title);
          }}
        >
          <div>
            <CalenderContentTitle>{title}</CalenderContentTitle>
            <p>{description}</p>
          </div>
          <div>
            <p>{getTimeFormat(startTime)}</p>
            <p>{getTimeFormat(endTime)}</p>
          </div>
        </CalenderContentContainer>
      ))}
    </CalenderDetailContainer>
  );
};

const Calender = () => {
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [calenderData, setCalenderData] = useState<CalenderContentType[]>([]);
  const [getData] = studyApi.useGetStudyByMonthMutation();

  useEffect(() => {
    (async function () {
      const data = await getData({ month });
      // setCalenderData(data);
    })();
  }, [month]);

  const compareDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <Layout title='캘린더'>
      <div />
      <CalenderWrapper>
        <CalendarScreen
          formatDay={(locale, date) => date.getDate().toString()}
          onChange={setSelectedDate}
          value={selectedDate}
          onActiveStartDateChange={({ activeStartDate }) => setMonth(activeStartDate)}
          tileContent={({ date }) =>
            [].find((x: Date) => compareDate(x, date)) ? <div className='dot'></div> : <div />
          }
        />
        <CalenderContent
          data={[
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
            {
              id: 0,
              title: 'http완벽가이드',
              startTime: new Date(),
              endTime: new Date(),
              description: '줌링크',
            },
          ]}
        />
      </CalenderWrapper>
    </Layout>
  );
};

export default Calender;
