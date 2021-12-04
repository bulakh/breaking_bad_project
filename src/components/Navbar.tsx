import React, {FC} from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/characters'>Characters</NavLink>
      {/* <NavLink>Episodes</Link> */}
      {/* <Link>Deathes</Link>
      <Link>Quotes</Link> */}
    </>
  );
}

export default Navbar;