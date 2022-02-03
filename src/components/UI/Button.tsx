import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../../styles/variables";

interface Props {
  onClick: () => void;
}

const StyledButton = styled.button`
  background: transparent;
  color: ${Colors.white};
  border: 1px solid ${Colors.white};
  padding: 8px 69px;

  font-family: ${Fonts.cooper};
  font-size: 18px;

  &:hover {
    background: ${Colors.white};
    color: ${Colors.background};

    cursor: pointer;
  }
`

const Button: FC<Props> = ({
    onClick,
    children,
  }) => {

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

export default Button;
