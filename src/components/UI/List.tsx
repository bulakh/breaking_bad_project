import React, {ElementType, ReactNode} from "react";
import styled from "styled-components";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    as?: ElementType | keyof JSX.IntrinsicElements;
}

const StyledList = styled.ul``

const List = <T,>({
    items,
    renderItem,
    ...props
  }: ListProps<T>) => {

  return (
    <StyledList {...props}>
      {items.map(renderItem)}
    </StyledList>
  );
}

export default List;
