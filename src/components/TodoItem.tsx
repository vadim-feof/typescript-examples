import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <li>
            {todo.title}. Выполнено:  {todo.completed ? '✅' : '❌'}
        </li>
    );
};

export default TodoItem;
