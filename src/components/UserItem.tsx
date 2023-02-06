import React, {FC} from 'react';
import {IUser} from "../types/types";
import {Link} from "react-router-dom";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <li>
            Имя: <Link to={`/users/${user.id}`}>{user.name}</Link>. Почта: {user.email}. Город: {user.address.city}. Улица: {user.address.street}
        </li>
    );
};

export default UserItem;
