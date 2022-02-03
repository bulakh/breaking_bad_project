import React, { FC } from "react";
import styled from "styled-components";
import { Theme } from "../../const";

interface Props {
  theme: Theme;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: ${({theme}) => theme === Theme.dark ? 'green' : 'blue'};
  color: white;
  padding: 20px;
`

const Button: FC<Props> = ({
    onClick,
    theme,
    children,
  }) => {

  return (
    <StyledButton onClick={onClick} theme={theme}>{children}</StyledButton>
  );
}

export default Button;
