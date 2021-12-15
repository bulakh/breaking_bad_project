import React, {FC} from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";

const Navbar: FC = () => {
  return (
    <ul>
      <li>
        <Link to={AppRoute.WELCOME}>Home</Link>
      </li>
      <li>
        <Link to={AppRoute.CHARACTERS}>Characters</Link>
      </li>
    </ul>
  );
}

export default Navbar;