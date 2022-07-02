import { useState } from 'react';
import CalendarScreen from 'react-calendar';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import 'react-calendar/dist/Calendar.css';

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

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: coral;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #fff6f2;
    border-radius: 6px;
    font-weight: bold;
    color: coral;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: coral33;
    border-radius: 6px;
    font-weight: bold;
    color: coral;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: coral;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: coral;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: coral;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: coral;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    /* border-top-left-radius: 0;
    border-bottom-left-radius: 0; */
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: coral;
    color: white;
  }
`;

const CalenderDetailContainer = styled.div``;

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Layout title='캘린더'>
      <div />
      <CalenderWrapper>
        <CalendarScreen
          formatDay={(locale, date) => date.getDate().toString()}
          onChange={setSelectedDate}
          value={selectedDate}
        />
        <CalenderDetailContainer />
      </CalenderWrapper>
    </Layout>
  );
};

export default Calender;
