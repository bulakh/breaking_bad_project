import React, {FC} from "react";
import { useNavigate } from "react-router";
import { AppRoute } from "../../const";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(AppRoute.WELCOME)
  }

  return (
    <div>
      <h1>404 Not found page!</h1>
      
      <button onClick={clickHandler}>
          Return to main
      </button>
    </div>
  );
}

export default NotFound;