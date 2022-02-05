import React, { FC } from "react";
import styled, { css } from "styled-components";


interface Props {
  flex?: boolean;
  column?: boolean;
  wrap?: boolean;
  center?: boolean;
  between?: boolean;
  widthAll?: boolean;
  heightAll?: boolean;
}


const StyledContainer = styled.div<Props>`

  display: ${({flex}) => flex ? 'flex' : 'block'};

  ${({column}) => column && css`
    flex-direction: column;`
  };

  ${({wrap}) => wrap && css`
    flex-wrap: wrap;`
  };

  ${({between}) => between && css`
    justify-content: space-between;`
  };

  ${({center}) => center && css`
    flex-direction: column;
    justify-content: center;
    align-items: center;`
  };


  ${({widthAll}) => widthAll && css`
    width: 100vw;`
  }

  ${({heightAll}) => heightAll && css`
    min-height: 100vh;`
  }

`

const Container: FC<Props> = ({
    flex,
    column,
    wrap,
    between,
    center,
    widthAll,
    heightAll,
    children,
    ...props
  }) => {

  return (
    <StyledContainer
      flex={flex}
      column={column}
      wrap={wrap}
      between={between}
      center={center}
      widthAll={widthAll}
      heightAll={heightAll}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}

export default Container;
