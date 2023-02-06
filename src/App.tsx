import React, {useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {

    const [users, setUsers] = useState<IUser[]>([
        {id: 1, name: 'Vadim', email: 'vadim@vadim.ru', address: {city: 'Kazan', street: 'Tovarischeskaya 40b'}},
        {id: 2, name: 'Anton', email: 'b1g_tony@rapira.ru', address: {city: 'Toliatty', street: 'Italyanskaya 228'}}
    ])

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
