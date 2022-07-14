import type { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { Label, ErrorMessage } from '@/CommonStyles';

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

interface TextAreaProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  label?: string;
  name?: string;
  required?: boolean;
  [key: string]: any;
}
const TextArea = ({
  placeholder,
  required,
  label,
  name,
  register,
  errorMessage,
  ...rest
}: TextAreaProps) => (
  <div>
    {label && name && <Label htmlFor={name}>{label}</Label>}
    <TextAreaStyle
      id={name}
      required={required}
      placeholder={placeholder}
      {...register}
      {...rest}
    />
    {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </div>
);
export default TextArea;
