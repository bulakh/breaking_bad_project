import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import QuoteItem from "../../components/QuoteItem";
import List from "../../components/UI/List";
import { IQuote } from "../../types/types";
import storeApp from "../../store/storeApp";
import Container from "../../components/UI/Container";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";

const Quotes: FC = () => {

  const {quotes, setQuotes, isLoading} = storeApp;

  useEffect(() => {
    if (quotes.length === 0) {
      setQuotes();
    }
  }, [quotes, setQuotes]);



  return (
    <Container>
      <PageTitle>Quotes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        items={quotes}
        renderItem={(quote: IQuote) => <QuoteItem quote={quote} key={quote.quote_id}/>}
      />
    </Container>
  );
}

export default observer(Quotes);
