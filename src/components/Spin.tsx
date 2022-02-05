import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../styles/variables";
import Container from "./UI/Container";

interface Props {
  isLoading?: boolean;
}


const StyledSpin = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;

  color: ${Colors.white};
  font-family: ${Fonts.cooper};
  font-size: 30px;
`

const Spin: FC<Props> = ({
    isLoading
  }) => {

  if (isLoading) {
    return (
      <Container heightAll>
        <StyledSpin>Loading...</StyledSpin>
      </Container>
    )
  }

  return null;
}

export default Spin;
