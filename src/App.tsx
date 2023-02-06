import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

function App() {

    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    const fetchUsers = async () => {
        try {
            const {data: users} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(users)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchTodos = async () => {
        try {
            const {data: todos} = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(todos)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div style={{padding: 24}}>
            <Card onClick={(num) => console.info(num)}
                  width={'50%'}
                  height={'200px'}
                  variant={CardVariant.outlined}
            >
                <button>Кнопка</button>
            </Card>

            <div style={{padding: 16, margin: '16px auto', backgroundColor: 'blanchedalmond', borderRadius: 4}}>
                <EventsExample/>
            </div>

            <h2>USERS:</h2>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <h2>TODO:</h2>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
}

export default App;
