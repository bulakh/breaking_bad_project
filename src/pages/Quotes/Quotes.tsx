import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import QuoteItem from "../../components/QuoteItem";
import List from "../../components/UI/List";
import { IQuote } from "../../types/types";
import storeApp from "../../store/storeApp";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";
import { QuotesContainer } from "./Quotes.styles";

const Quotes: FC = () => {

  const {quotes, setQuotes, isLoading} = storeApp;

  useEffect(() => {
    if (quotes.length === 0) {
      setQuotes();
    }
  }, [quotes, setQuotes]);



  return (
    <QuotesContainer>
      <PageTitle>Quotes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        items={quotes}
        renderItem={(quote: IQuote) => <QuoteItem quote={quote} key={quote.quote_id}/>}
      />
    </QuotesContainer>
  );
}

export default observer(Quotes);
