import React, {FC} from "react";
import { useNavigate } from "react-router";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { AppRoute } from "../../const";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(AppRoute.WELCOME)
  }

  return (
    <Container flex center all>
      <h1>404 Not found page!</h1>

      <Button onClick={clickHandler}>
          Return to main
      </Button>
    </Container>
  );
}

export default NotFound;
