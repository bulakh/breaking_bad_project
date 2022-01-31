import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import QuoteItem from "../../components/QuoteItem";
import List from "../../components/UI/List";
import { IQuote } from "../../types/types";
import storeApp from "../../store/storeApp";

const Quotes: FC = () => {

  const {quotes, setQuotes, isLoading} = storeApp;

  useEffect(() => {
    if (quotes.length === 0) {
      setQuotes();
    }
  }, [quotes, setQuotes]);


  
  if (isLoading) {
    return <h2>Loading...</h2>
  }

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

export default observer(Quotes);