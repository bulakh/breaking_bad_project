import React, {FC} from "react";
import { useNavigate } from "react-router";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import PageTitle from "../../components/UI/PageTitle";
import { AppRoute } from "../../const";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(AppRoute.WELCOME)
  }

  return (
    <Container flex center widthAll heightAll>
      <PageTitle>404 Not found page!</PageTitle>

      <Button onClick={clickHandler}>
          Return to main
      </Button>
    </Container>
  );
}

export default NotFound;
