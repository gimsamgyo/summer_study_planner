import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: 14px;
  border: 1px solid gray;
  &:focus {
    border-color: coral;
    outline: 1px solid coral;
  }
`;
const Input = ({ ...rest }) => (
  <InputStyle
    type='text'
    {...rest}
  />
);
export default Input;
