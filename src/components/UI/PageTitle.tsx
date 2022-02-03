import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/variables";



const StyledTitle = styled.h1`
  color: ${Colors.white};
  font-size: 30px;
`

const PageTitle: FC = ({
    children
  }) => {

  return (
    <StyledTitle>{children}</StyledTitle>
  );
}

export default PageTitle;
