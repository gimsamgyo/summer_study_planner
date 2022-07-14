import styled from 'styled-components';

const DayButtonStyle = styled.button<{ isFilled: boolean }>`
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid coral;
  color: ${({ isFilled }) => (isFilled ? 'whitesmoke' : 'coral')};
  font-weight: 600;
  border-radius: 50%;
  background: ${({ isFilled }) => (isFilled ? 'coral' : 'white')};
  cursor: pointer;
  transition: all 150ms linear;
`;

const DayButton = ({
  content,
  setDayChecked,
  isFilled,
}: {
  content: string;
  setDayChecked: () => void;
  isFilled: boolean;
}) => (
  <DayButtonStyle
    onClick={setDayChecked}
    isFilled={isFilled}
  >
    {content}
  </DayButtonStyle>
);
export default DayButton;
