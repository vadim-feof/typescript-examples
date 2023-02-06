import React, {useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const {data: todos} = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(todos)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h2>TODO:</h2>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default TodoPage;
