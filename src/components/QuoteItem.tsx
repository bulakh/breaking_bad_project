import React, {FC} from "react";
import styled from "styled-components";
import { IQuote } from "../types/types";


interface QuoteItemProps {
    quote: IQuote;
}

const StyledItem = styled.li`
  margin-bottom: 50px;
`

const QuoteParagraph = styled.p`
  font-size: 35px;
  margin-bottom: 15px;
`

const QuoteAutor = styled.figcaption`
  font-size: 18px;
  font-weight: 300;

`

const QuoteItem: FC<QuoteItemProps> = ({quote}) => {
  return (
    <StyledItem>
      <figure>
        <blockquote><QuoteParagraph>&#8220;{quote.quote}&#8221;</QuoteParagraph></blockquote>
        <QuoteAutor>{quote.author}, <cite>{quote.series}</cite></QuoteAutor>
      </figure>
    </StyledItem>
  );
}

export default QuoteItem;
