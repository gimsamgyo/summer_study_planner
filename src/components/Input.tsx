import type { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { Label, ErrorMessage } from '@/CommonStyles';

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

interface InputProps {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  label?: string;
  name?: string;
  required: boolean;
}
const Input = ({
  type,
  placeholder,
  required,
  register,
  errorMessage,
  label,
  name,
}: InputProps) => (
  <div>
    {name && label && <Label htmlFor={name}>{label}</Label>}
    <div>
      <InputStyle
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register}
      />
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  </div>
);
export default Input;
