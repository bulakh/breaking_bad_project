import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Hidden } from "../../styles/variables";

interface Props {
  hide?: boolean;
}


const StyledTitle = styled.h1<Props>`
  ${({hide}) => hide && Hidden}
  color: ${Colors.white};
  font-size: 30px;
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
