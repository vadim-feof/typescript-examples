import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const {data: user} = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(user)
        } catch (e) {
            console.log(e)
        }
    }

    const backHandler = () => {
        navigate('/users')
    }

    return (
        <div>
            <button onClick={backHandler}>Back</button>
            <h4>
                Имя: {user?.name}. Почта: {user?.email}. Город: {user?.address.city}. Улица: {user?.address.street}
            </h4>
        </div>
    );
};

export default UserItemPage;
