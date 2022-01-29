import React, { FC, ReactNode } from "react";

// interface InputProps {
//     onChange: Function,
//     value: string,
//     placeholder?: string,
// }

const Input: FC<ReactNode> = (changeInputHandler, props) => {

  return (
    <input type="text" {...props}/>
  );
}

export default Input;
