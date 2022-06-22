import styled from 'styled-components';

interface IButtonStyle {
  primary?: boolean;
}

interface IButton extends IButtonStyle {
  onClick?: () => void;
  content: string;
}

const ButtonStyle = styled.button<IButtonStyle>`
  cursor: pointer;
  background: ${({ primary }) => (primary ? 'coral' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : '#222')};
  border: 1px solid coral;
  border-radius: 8px;
  padding: 0.2rem 1rem;
`;

const Button = ({ primary, onClick, content }: IButton) => (
  <ButtonStyle
    type='button'
    onClick={onClick}
    primary={primary}
  >
    {content}
  </ButtonStyle>
);
export default Button;