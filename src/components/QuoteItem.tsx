import React, {FC} from "react";
import { IQuote } from "../types/types";


interface QuoteItemProps {
    quote: IQuote;
}

const QuoteItem: FC<QuoteItemProps> = ({quote}) => {
  return (
    <li>
        <h3 style={{marginBottom: '0'}}><i>{quote.quote}</i></h3>
        {quote.author}
    </li>
  );
}

export default QuoteItem;
