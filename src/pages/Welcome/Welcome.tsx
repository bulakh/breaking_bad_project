import React, {FC} from "react";
import { useNavigate } from "react-router";
import { AppRoute } from "../../const";

const Welcome:FC  = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(AppRoute.CHARACTERS)
  }


  return (
    <>
      <h1>Breaking bad info</h1>
      
      <button onClick={clickHandler}>
          Let's go!
      </button>
    </>
  );
}

export default Welcome;