import React, { FC } from "react";
import styled, { css } from "styled-components";


interface Props {
  flex?: boolean;
  center?: boolean;
  all?: boolean;
}


const StyledContainer = styled.div<Props>`

  display: ${({flex}) => flex ? 'flex' : 'block'};

  ${({center}) => center && css`
    flex-direction: column;
    justify-content: center;
    align-items: center;`
  };


  ${({all}) => all && css`
    width: 100vw;
    height: 100vh;`
  }

`

const Container: FC<Props> = ({
    flex,
    center,
    all,
    children,
    ...props
  }) => {

  return (
    <StyledContainer
      flex={flex}
      center={center}
      all={all}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}

export default Container;
