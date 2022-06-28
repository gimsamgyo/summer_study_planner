export interface IButtonStyle {
  primary?: boolean;
}

export interface IButton extends IButtonStyle {
  /* eslint-disable-next-line */
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  content: string;
}
