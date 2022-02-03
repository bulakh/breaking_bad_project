import React, {FC} from "react";
import { useNavigate } from "react-router";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { AppRoute, Theme } from "../../const";
import { Title } from "./Welcome.styles";

const Welcome:FC  = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`main/${AppRoute.CHARACTERS}`);
  };

  return (
      <Container flex>
        <Title>Breaking bad info</Title>

        <Button onClick={clickHandler} theme={Theme.dark}>Let's go!</Button>
      </Container>
  );
}

export default Welcome;
