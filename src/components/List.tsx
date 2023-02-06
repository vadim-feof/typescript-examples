import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({items, renderItem}: ListProps<T>) {
    return (
        <ol>
            {items.map(renderItem)}
        </ol>
    )
}

// OR

// const List: <T>(props: ListProps<T>) => React.ReactElement = props => {
//     return (
//         <ol>
//             {props.items.map(props.renderItem)}
//         </ol>
//     )
// };

export default List;

