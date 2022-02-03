import React, {FC} from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { NavItem, NavList } from "./Navbar.styles";



const Navbar: FC = () => {


  return (
    <NavList>
      <NavItem>
        <Link to={AppRoute.WELCOME}>Welcome</Link>
      </NavItem>
      <NavItem>
        <Link to={AppRoute.CHARACTERS}>Characters</Link>
      </NavItem>
      <NavItem>
        <Link to={AppRoute.EPISODES}>Episodes</Link>
      </NavItem>
      <NavItem>
        <Link to={AppRoute.QUOTES}>Quotes</Link>
      </NavItem>
      <NavItem>
        <Link to={AppRoute.DEATHS}>Deathes</Link>
      </NavItem>
    </NavList>
  );
}

export default Navbar;
