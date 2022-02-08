import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts, Hidden } from "../../styles/variables";

interface Props {
  hide?: boolean;
}


const StyledTitle = styled.h1<Props>`
  ${({hide}) => hide && Hidden}

  margin-bottom: 55px;

  color: ${Colors.white};
  font-size: 50px;
  font-family: ${Fonts.cooper}

`

const PageTitle: FC<Props> = ({
    hide,
    children
  }) => {

  return (
    <StyledTitle hide={hide}>{children}</StyledTitle>
  );
}

export default PageTitle;
