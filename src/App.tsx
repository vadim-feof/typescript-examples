import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";

function App() {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const {data: users} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(users)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Card onClick={(num) => console.info(num)}
                  width={'50%'}
                  height={'200px'}
                  variant={CardVariant.outlined}
            >
                <button>Кнопка</button>
            </Card>

            <UserList users={users}/>
        </div>
    );
}

export default App;
