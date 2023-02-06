import React, {useEffect, useState} from 'react';
import List from "./List";
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import axios from "axios";

const UserPage = () => {

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
            <h2>USERS:</h2>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
        </div>
    );
};

export default UserPage;
