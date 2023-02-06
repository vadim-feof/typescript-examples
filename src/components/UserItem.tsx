import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <li>
            Имя: {user.name}. Почта: {user.email}. Город: {user.address.city}. Улица: {user.address.street}
        </li>
    );
};

export default UserItem;
