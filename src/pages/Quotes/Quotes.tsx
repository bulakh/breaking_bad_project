import React, {FC, useEffect, useState} from "react";
import QuoteItem from "../../components/QuoteItem";
import List from "../../components/UI/List";
import { fetchQuotes } from "../../hooks/useFetch";
import { IQuote } from "../../types/types";

const Quotes: FC = () => {

  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    fetchQuotes(setQuotes);
  }, [])

  return (
    <>
      <h1>Quotes</h1>

      <List
        items={quotes} 
        renderItem={(quote: IQuote) => <QuoteItem quote={quote} key={quote.quote_id}/>}
      />
    </>
  );
}

export default Quotes;