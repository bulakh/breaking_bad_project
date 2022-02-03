import React, {FC} from "react";
import { useNavigate } from "react-router";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { AppRoute } from "../../const";
import { SubTitle, Title } from "./Welcome.styles";

const Welcome:FC  = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`main/${AppRoute.CHARACTERS}`);
  };

  return (
      <Container flex center all>
        <Container>
          <Title>Breaking bad</Title>
          <SubTitle>info</SubTitle>
        </Container>

        <Button onClick={clickHandler}>Let's go!</Button>
      </Container>
  );
}

export default Welcome;
