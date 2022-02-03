import React, {ReactNode} from "react";

interface ListProps<T> {
    flex?: boolean;
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {

    return (
        <>
            {props.flex
                ? <div style={{display:'flex', flexWrap: 'wrap'}}>
                    {props.items.map(props.renderItem)}
                </div>
                : <div>
                    {props.items.map(props.renderItem)}
                </div>
            }
        </>
    )
}
