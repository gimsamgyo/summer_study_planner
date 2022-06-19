import styled from 'styled-components';

const TextAreaStyle = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  font-size: 14px;
  border: 1px solid gray;
  &:focus {
    border-color: coral;
    outline: 1px solid coral;
  }
`;

const TextArea = ({ ...rest }) => <TextAreaStyle {...rest} />;
export default TextArea;
