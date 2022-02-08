import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styles/variables";

interface Props {
  match?: object | null;
}

const StyledLink = styled(Link)<Props>`
  display: inline-block;
  position: relative;

  font-size: 20px;
  color: ${Colors.white};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${Colors.white};
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    ${({match}) => match && 'transform: scaleX(1)'}
  }

  &:hover:after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`



const CustomLink = ({ children, to, ...props }:LinkProps) => {

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink
      match={match}
      to={to}
      {...props}
    >
      {children}
    </StyledLink>
  );
}

export default CustomLink;
