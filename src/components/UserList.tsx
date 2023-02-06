import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <ol>
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </ol>
    );
};

export default UserList;
