import React, { FC } from "react";
import styled from "styled-components";


interface Props {
  flex?: boolean;
}


const StyledContainer = styled.div<Props>`
  display: ${({flex}) => flex  ? 'flex' : 'block'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container: FC<Props> = ({
    flex,
    children,
    ...props
  }) => {

  return (
    <StyledContainer flex={flex} {...props}>{children}</StyledContainer>
  );
}

export default Container;
