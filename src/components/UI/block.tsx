import React, { FC } from "react";

export enum BlockVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface BlockSize {
    width: string;
    height: string;
    variant: BlockVariant;
}

const Block: FC<BlockSize> = ({
    width, 
    height,
    variant,
    children
}) => {

  return (
      
    <div style={{
        width, 
        height, 
        background: variant === BlockVariant.primary ? 'tomato' : '', 
        border: variant === BlockVariant.outlined ? '1px solid black' : 'none'
    }}>
        {children }
    </div>
  );
}

export default Block;