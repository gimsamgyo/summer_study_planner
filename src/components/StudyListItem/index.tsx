import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.8rem;
`;
const StudyTitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const StudyTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: coral;
`;
const StudyInformationWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  width: 100%;
`;
const StudyDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: #333;
  flex: 1;
`;
const StudyJoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MoneyText = styled.span`
  color: coral;
  padding: 0 0.5rem;
`;

interface Props {
  title: string;
  term: string;
  period: string;
  place: string;
  lateFee: string;
}

export default function StudyListItem({ title, term, period, place, lateFee }: Props) {
  return (
    <Container>
      <StudyTitleWrapper>
        <StudyTitle>{title}</StudyTitle>
      </StudyTitleWrapper>
      <StudyInformationWrapper>
        <StudyDetailInfo>
          <p>{term}</p>
          <p>{period}</p>
          <p>{place}</p>
          <p>
            지각비:
            <MoneyText>{lateFee}</MoneyText>
          </p>
        </StudyDetailInfo>
        <StudyJoinWrapper>
          <Button
            content='참석'
            primary
          />
          <Button content='자세히' />
        </StudyJoinWrapper>
      </StudyInformationWrapper>
    </Container>
  );
}
