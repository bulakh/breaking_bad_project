import React, {FC} from "react";
import { AppRoute } from "../../const";
import CustomLink from "./CustomLink";
import { NavContainer, NavItem, NavList } from "./Navbar.styles";





const Navbar: FC = () => {

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <CustomLink to={AppRoute.WELCOME}>Welcome</CustomLink>
        </NavItem>
        <NavItem>
          <CustomLink to={AppRoute.CHARACTERS}>Characters</CustomLink>
        </NavItem>
        <NavItem>
          <CustomLink to={AppRoute.EPISODES}>Episodes</CustomLink>
        </NavItem>
        <NavItem>
          <CustomLink to={AppRoute.QUOTES}>Quotes</CustomLink>
        </NavItem>
        <NavItem>
          <CustomLink to={AppRoute.DEATHS}>Deathes</CustomLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
