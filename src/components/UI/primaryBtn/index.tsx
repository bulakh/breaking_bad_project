import React, { FC } from "react";
import styled from "styled-components";



interface PrimaryBtn {
    primary?: any;
}

const Btn = styled.button`
    background: black;
    color: white;
`

const Button: FC<PrimaryBtn> = ({
    primary, 
    children
}) => {

  return (
    <Btn>{children}</Btn>
  );
}

export default Button;
