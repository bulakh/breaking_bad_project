import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/variables";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const StyledInput = styled.input`
  padding: 5px;

  background: transparent;
  border: 1px solid ${Colors.white};
  outline: ${Colors.white};
  ::placeholder {
    color: ${Colors.white};
    opacity: 0.5;
  }

  font-size: 20px;
  font-family: inherit;
  color: ${Colors.white};
`

const Input: FC<Props> = ({
    onChange,
    value,
    placeholder,
    ...props
  }) => {

  return (
    <StyledInput onChange={onChange} type="text" value={value} placeholder={placeholder} {...props}/>
  );
}

export default Input;
