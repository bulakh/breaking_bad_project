import React, {FC} from "react";
import { IQuote } from "../types/types";


interface QuoteItemProps {
    quote: IQuote;
}

const QuoteItem: FC<QuoteItemProps> = ({quote}) => {
  return (
    <div>
        <h3 style={{marginBottom: '0'}}><i>{quote.quote}</i></h3>
        {quote.author}
    </div>
  );
}

export default QuoteItem;